
#installer.nsh

# 用户选择安装路径后追加目录
!define DIR_NAME ""
Function .onVerifyInstDir
  StrLen $0 "\${DIR_NAME}"
  StrCpy $1 "$INSTDIR" "" -$0
  StrCmp $1 "\${DIR_NAME}" +2 0
  StrCpy $INSTDIR "$INSTDIR\${DIR_NAME}"
FunctionEnd


# 修改默认安装路径
!macro customInit
    StrCpy $INSTDIR "$LocalAppData\Programs Files\Mxkd"
!macroend

Var OLD_PATH
Var UNINSTALL_PROG

# 宏 初始化前
!macro preInit
  # 获取个人环境的注册表信息
  ReadRegStr $R5 HkCU "SOFTWARE\${APP_GUID}" "InstallLocation"
  StrCpy $OLD_PATH $R5
  StrCpy $UNINSTALL_PROG "$OLD_PATH\Uninstall ${PRODUCT_FILENAME}.exe"
!macroend

# 宏 安装后 卸载(个人用户)旧的程序
!macro customInstall
  #注册表写入协议(实现浏览器自定义协议打开)
  DetailPrint "Register mxcad URI Handler"
  DeleteRegKey HKCR "mxcad"
  WriteRegStr HKCR "mxcad" "" "URL:mxcad"
  WriteRegStr HKCR "mxcad" "URL Protocol" ""
  WriteRegStr HKCR "mxcad\shell" "" ""
  WriteRegStr HKCR "mxcad\shell\Open" "" ""
  WriteRegStr HKCR "mxcad\shell\Open\command" "" "$INSTDIR\${APP_EXECUTABLE_FILENAME} %1"

  #写入icon地址
  #WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${UNINSTALL_APP_KEY}"  "DisplayIcon" "$INSTDIR\resources\public\icons\icon.ico"
  #写入支持链接地址
  #WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${UNINSTALL_APP_KEY}"  "URLInfoAbout" "https://www.mxdraw3d.com/"
  #写入版本信息
  #WriteRegStr HKLM "Software\Microsoft\Windows\CurrentVersion\Uninstall\${UNINSTALL_APP_KEY}"  "DisplayVersion" "${VERSION}"
  # 判断卸载程序是否存在，存在则静默执行，执行完将卸载程序删除，并删除文件夹
  IfFileExists $UNINSTALL_PROG handleUninstall done
    handleUninstall:
      ExecWait '"$UNINSTALL_PROG" /S _?=$OLD_PATH' $0
      DetailPrint "Uninstall ${PRODUCT_FILENAME}.exe returned $0"
      Delete "$UNINSTALL_PROG"
      RMDir $OLD_PATH
    done:
      ; MessageBox MB_ICONEXCLAMATION|MB_OK "$OLD_PATH"
!macroend

# 卸载时执行
!macro customUnInstall
  #删除注册表写入的协议(浏览器自定义协议打开)
  DeleteRegKey HKCR "mxcad"
!macroend



