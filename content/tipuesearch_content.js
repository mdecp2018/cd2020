var tipuesearch = {"pages": [{'title': 'About', 'text': 'Repository:  https://github.com/mdecourse/cd2020 \n Project:\xa0 https://github.com/mdecourse/cd2020/projects/1 \n Gitter:  https://gitter.im/mdecourse/cd2020 \xa0 \n Web site:  https://mde.tw/cd2020 \xa0 \n Blog:  https://mde.tw/cd2020/blog \xa0 \n Presentation:  https://mde.tw/cd2020/reveal \xa0 \n \n 電腦輔助設計室與協同設計室行事曆 \n 全頁檢視 \n \n 請登入 gm 電子郵箱後, 填寫下列表單: \n 選課學員基本資料 \n 課程回饋表單 \n 協同產品設計實習自評與互評表單', 'tags': '', 'url': 'About.html'}, {'title': 'KMOL2020', 'text': 'Create Portable Programming System for\xa0Windows 10: \n PortableGit:\xa0 https://git-scm.com/download/win \n MSYS2:\xa0 https://www.msys2.org/ \n Python 3.8.1:\xa0 https://www.python.org/downloads/ \n CMSiMDE:\xa0 https://github.com/mdecourse/cmsimde \n Flask:\xa0 https://github.com/pallets/flask \n lxml:\xa0 https://github.com/lxml/lxml \n bs4:\xa0 https://pypi.org/project/beautifulsoup4/ \n markdown:\xa0 https://github.com/Python-Markdown/markdown \n flask-cors:\xa0 https://github.com/corydolphin/flask-cors \n Pelican:\xa0 https://github.com/getpelican/pelican \n Reveal.js:\xa0 https://github.com/hakimel/reveal.js/ \n Leo Editor:\xa0 https://github.com/leo-editor/leo-editor \n SciTE:\xa0 https://www.scintilla.org/SciTEDownload.html \n Tiny C Compiler:\xa0 https://github.com/TinyCC/tinycc \n Fossil SCM:\xa0 https://www.fossil-scm.org/ \n Jupyterlab:\xa0 https://github.com/jupyterlab/jupyterlab \n Flutter:\xa0 https://github.com/flutter/flutter \n Visual Studio Code:\xa0 https://github.com/microsoft/vscode \n', 'tags': '', 'url': 'KMOL2020.html'}, {'title': 'Python', 'text': 'Create a Portable Python: \n Install Python 3.8.1 without pip \n PYTHONPATH \n get-pip.py \n start.bat \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\n%Disk%:\n\nset HomePath=%Disk%:\\home_mdecourse\nset HomeDrive=%Disk%:\\home_mdecourse\nset Home=%Disk%:\\home_mdecourse\nset USERPROFILE=%Disk%:\\home_mdecourse\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\nset PYTHONPATH=%Disk%:\\py38\\DLLs;%Disk%:\\py38\\Lib;%Disk%:\\py38\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py38\n\nREM for flutter\nset java_home=%Disk%:\\java\\jdk8u222-b10\nset ANDROID_SDK_home=%Disk%:\\home_mdecourse\nset GRADLE_USER_home=%Disk%:\\home_mdecourse\nset ANDROID_SDK_ROOT=%Disk%:\\android\\sdk\nset ANDROID_Home=%Disk%:\\android\\sdk\\tools\n\nREM for putty\nset GIT_HOME=%CDisk%:\\portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe\n\nset path_python=%Disk%:\\py38;%Disk%:\\py38\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nREM coreutils is for compiling fossil scm\nset path_coreutils=%Disk%:\\coreutils-5.3.0\\bin;%Disk%:\\depends22_x64;\nset path_tcc=%Disk%:\\tcc;\nset path_cmake=%Disk%:\\cmake-3.10.1-win64-x64\\bin;\nset path_nodejs=%Disk%:\\nodejs;%Disk%:\\nodejs\\appdata\\roaming\\npm;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_xming=%Disk%:\\Xming;\nset path_latex=%Disk%:\\Pandoc;%Disk%:\\TinyTeX\\bin\\win32;\nset path_flutter=%Disk%:\\java\\jdk8u222-b10\\bin;%Disk%:\\flutter\\bin;%Disk%:\\Android\\sdk;%Disk%:\\Android\\sdk\\tools;%Disk%:\\Android\\sdk\\tools\\bin;%Disk%:\\Android\\sdk\\platform-tools;%Disk%:\\flutter\\bin\\cache\\dart-sdk\\bin;%Disk%:\\vscode;\nset path_putty=%Disk%:\\putty;\n\npath=%Disk%:;%path_python%;%path_msys2%;%path_tcc%;%path_git%;%path_cmake%;%path_coreutils%;%path_flutter%;%path_putty%;%path_latex%;%path%;\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\nstart /MIN %Disk%:\\kmolScite\\SciTE.exe\nstart /MIN %Disk%:\\kmolScite\\SciTE.exe\n\nExit \n', 'tags': '', 'url': 'Python.html'}, {'title': 'Microcontroller', 'text': 'Login to your gm email and download\xa0 \n 2019_ArduinoApplied.pdf \n and\xa0 \n 2018_BeginningRoboticsWithRaspberry.pdf \n Arduino Simulator \n https://www.sites.google.com/site/unoardusim/ \n PIC Simulator Labortory \n https://github.com/lcgamboa/picsimlab \n https://lcgamboa.github.io/ \n https://mplabxpress.microchip.com/mplabcloud/ide \n Login to your gm account and  download all Microchip related tools . \n Rasberry Pi \n https://github.com/gavinlyonsrepo/RpiMotorLib \n Python-exemplary \n http://www.python-exemplary.com/', 'tags': '', 'url': 'Microcontroller.html'}, {'title': 'MSYS2', 'text': 'https://www.msys2.org/ \n Y:\\py38\\Lib\\distutils\\distutils.cfg \n [build]\ncompiler=mingw32\n\n[build_ext]\ncompiler=mingw32 \n Reference \n https://github.com/KmolYuan/pyslvs/blob/master/platform/set_pycompiler.bat', 'tags': '', 'url': 'MSYS2.html'}, {'title': 'Pyslvs-UI', 'text': 'Compile and install python_solvespace library \n Pyslvs-UI requires  https://github.com/mdecourse/solvespace \xa0python_solvespace pyd\xa0dynamic library of the python branch. \n git clone --recurse-submodules  https://github.com/mdecourse/solvespace.git \xa0 \n cd solvespace \n git checkout python \n cd cython \n python setup.py install \n Compile and install Pyslvs-UI \n git clone --recurse-submodules  https://github.com/mdecourse/pyslvs-UI.git \n cd pyslvs-UI \n python -m pip install -r requirements.txt \n mingw32-make install \n', 'tags': '', 'url': 'Pyslvs-UI.html'}, {'title': 'Grading', 'text': '自評 (30%) \n 互評 (30%) \n 教師評分 (40%) \n \n 出席、倉儲、網站與筆記本維護 (30%) \n \xa0專案一 (15%) \n 專案二 (15%) \n 專案三 (20%) \n 專案四 (20%)', 'tags': '', 'url': 'Grading.html'}, {'title': 'Grouping', 'text': '亂數分組: \n 學員名單 URL:      \n \n Dart source code for random grouping \n evenGrouping.dart: \n import \'dart:html\';\n\n  InputElement studListUrl = querySelector("#studListUrl");\n  String studUrl;\n  // 將 Label 改為 Textarea, 避免產生過程結果嵌入所在頁面\n  TextAreaElement output = querySelector("#output");\n\nmain() {\n  querySelector("#submit").onClick.listen((e) => grouping());\n}\n\ngrouping() {\n  output.innerHtml = "";\n\n  if (studListUrl.value != "") {\n    studUrl = studListUrl.value;\n  } else {\n    studUrl = \'https://mde.tw/cp2019/downloads/2019fall_cp_1a_list.txt\';\n  }\n\n  // 組序由 1 開始\n  int gth = 1;\n  // 迴圈序號變數\n  int i;\n  int j;\n  int total;\n  int inc;\n  // 每組學員暫存數列\n  var gpList = [];\n  // 全班分組數列\n  var cp2019 = [];\n  // 各組人數數列\n  var numList = [];\n\n  HttpRequest.getString(studUrl).then((String resp) {\n    // 利用 trim() 去除字串最後的跳行符號, 之後再利用 split() 根據 \\n 轉為數列\n    var studList = resp.trim().split("\\n");\n    // 數列利用 shuffle() 方法以隨機方法弄亂順序\n    studList.shuffle();\n    total = studList.length;\n    output.text += "全班總計" + total.toString() + " 人\\n";\n    numList = getNumList(studList.length);\n    inc = 0;\n    for (i in numList){\n      // 列印區隔符號\n      output.text += \'=\' * 20 + "\\n";\n      output.text += "group $gth 有 " + i.toString() + " 人: \\n";\n      gpList = [];\n      for (j = 0; j < i; j++){\n        output.text += studList[j+inc] + "\\n";\n        // 在各分組數列中加入將對應的學員學號\n        gpList.add(studList[j+inc]);\n      }\n      gth = gth + 1;\n      inc = inc + j;\n        //output.text += studList[j] + "\\n";\n        // 逐步將各組暫存的分組數列加入全班分組數列中\n      gpList.sort();\n      cp2019.add(gpList);\n    }\n    // 列出全班分組數列\n    output.text += cp2019.toString() + "\\n";\n    // 列出已經排序後的分組名單\n    output.text += \'=\' * 25 + "\\n";\n    output.text += \'以下為排序後的各組成員名單: \\n\';\n    gth = 1;\n    for (i=0; i < cp2019.length; i++){\n      // 列印區隔符號\n      output.text += \'=\' * 20 + "\\n";\n      output.text += "group $gth \\n";\n      gpList = [];\n      for (j=0; j < cp2019[i].length; j++){\n        output.text += cp2019[i][j] + "\\n";\n      }\n      gth = gth + 1;\n    }\n  });\n}\n\nList getNumList(int total){\n  // total student number\n  // int total = 65;\n  // initial each group expect to be "eachGrp" number of people\n  int eachGrp = 10;\n  // may divide into "grpNum" number of group\n  int grpNum = total ~/ eachGrp;\n  // vacant list\n  var splits = [];\n  // find remainder when total number divid into "grpNum" number of group\n  int remainder = total % grpNum;\n  // number of people in one group by calculation\n  int calGrp = total ~/ grpNum;\n\n  for (int i = 0; i < grpNum; i++) {\n    splits.add(calGrp);\n  }\n  //print(splits);\n\n  for (int i = 0; i < remainder; i++) {\n    splits[i] += 1;\n  }\n  //print(splits);\n  return splits;\n }\n \n index.html: \n <h1>亂數分組:</h1>\n學員名單 URL: <input type="text" id="studListUrl" size="50" value="https://mde.tw/cp2019/downloads/2019fall_cp_1a_list.txt"><br />\n<input type="submit" value="開始分組" id="submit"><br />\n<textarea id="output" cols="80" rows="10"></textarea> \n style.css: \n body {\n  color: white;\n  font-size: 20px;\n}\n\ninput, select, textarea {\nfont-size: 100%;\n} \n', 'tags': '', 'url': 'Grouping.html'}, {'title': 'Topics', 'text': 'Topic 1: Mechanical Design Process \n Login to your gm email account and download  MechanicalDesignProcess.pdf . \n (Can we build online tools to facilitate these processes?) \n Successful Design \n Building the\xa0Design \n Structural Considerations \n Materials and\xa0Processes \n Topic 2: Mechatronic System Design \n Login to your gm email account and download  MSModelingAndTFApproaches.pdf . \n (Can we build online tools to facilitate these processes?) \n Mechatronic Systems \n Mathematical Modeling \n Transfer Function Approaches \n Login to your gm email account and download  MechatronicDesignCases.pdf . \n DC Motor Velocity and Position Control \n Balancing Robot Control \n Magnetic Levitation System \n Topic 3: Mechatronic Future and Challenges \n Login to your gm email account and download  MechaFutureAndChallenges.pdf . \n Mechatronic Futures \n Mechatronics Disrupted \n Challenges in Mechatronics \n Login to your gm email account and download  MechaEducFutureNeed.pdf . \n Education to meet future need \n \n Pendulum rolling ball clock \n Login to your gm email account and download  PendulumRollingBallClock.mp4 \xa0and  MarbleStrikeClock.mp4 \n \n \n http://lab.kmol.info/2017fall/blog/kmol-2017-fall-cadp-fourbar-three-position-synthesis.html \n Login to your gm email account and  download all reference files .', 'tags': '', 'url': 'Topics.html'}, {'title': 'Mechanical Design', 'text': 'Frontend - backend and design process \n Frontend Dart: \n // 因為要使用超文件表單, 因此導入 html 程式庫\nimport "dart:html";\n\n// 每一個 Dart 程式都從 main() 開始執行\nmain() {\n  // 透過表單, 取得使用者輸入的溫度值, 語法為數字加上 C 或 F\n  InputElement tempInput = querySelector("#temp");\n  querySelector("#submit").onClick.listen((e) => pyconvert(tempInput.value));\n}\n\npyconvert(String data) {\n  // 準備將轉換結果顯示在 output Label 區\n  LabelElement output = querySelector("#output");\n  // 將 data 送到遠端 python flask 程式區\n  request(data);\n} // pyconvert\n\nrequest(String asset) {\n  var response = document.querySelector(\'#response\');\n  var url = \'http://localhost:5000/${asset}\';\n\n  HttpRequest.getString(url, onProgress: (_) => response.text = \'Loading ...\')\n      .then((resp) => response.setInnerHtml(\'<pre>${resp}</pre>\'))\n      .catchError((error) => response.text = \'ERROR !!!: ${error.toString()}\');\n}\n\n/* 以下為 Python Flask 伺服器端的程式碼, 可以接受 Dart 前端送來的字串, 進行溫度轉換運算後, 將結果傳回\nimport flask\n# 導入 flask_cors 模組中的 CORS\n# 目的在讓伺服器可以被遠端的 Dart 程式跨網域擷取資料\nfrom flask_cors import CORS\n\napp = flask.Flask(__name__)\n# 讓應用程式啟動後, 可以跨網域被截取資料\nCORS(app, support_credentials=False)\nglobal data\n\n@app.route(\'/\', methods =[\'POST\', \'GET\'])\ndef root():\n    if flask.request.method == \'POST\': \n        data = flask.request.form[\'data\'] \n        print(data)\n        resp = {"data": data}\n        output = flask.json.dumps(data)\n    else:\n        # 將 Python 中的 dictionary 資料透過 json 格式送出後\n        # 讓遠端的 Dart 程式可以擷取\n        data = {"a": 1, "b": data+"yen", "c": "字串"}\n        output = flask.json.dumps(data)\n    return output\n    \n@app.route(\'/<name>\', methods=[\'POST\', \'GET\'])\ndef convert(name):\n    #name[-1] 為字串最後一個字元\n    # name[:-1] 則為數字\n    if name[-1] is "F" or name[-1] is "f":\n        # 表示要將華氏溫度轉為攝氏\n        return FtoC(name[:-1])\n    else:\n        return CtoF(name[:-1])\n    \n#celsius = 5/9 ( fahrenheit − 32)\n#定義一個 celsius 轉 fahrenheit  函式\ndef CtoF(c):\n    return "攝氏" + c + "度=華氏" + str(round(int(c)*9/5 + 32, 2)) + "度"\n\n#定義一個 celsius 轉 fahrenheit  函式\ndef FtoC(f):\n    return "華氏" + f + "度=攝氏" + str(round((int(f) - 32)*5/9, 2)) + "度"\n\n\nif __name__ == \'__main__\':\n    # 內建的 Flask Web 啟動埠號為 5000\n    app.run()\n*/ \n Backend Python: \n import flask\n# 導入 flask_cors 模組中的 CORS\n# 目的在讓伺服器可以被遠端的 Dart 程式跨網域擷取資料\nfrom flask_cors import CORS\n \napp = flask.Flask(__name__)\n# 讓應用程式啟動後, 可以跨網域被截取資料\nCORS(app, support_credentials=False)\nglobal data\n \n@app.route(\'/\', methods =[\'POST\', \'GET\'])\ndef root():\n    if flask.request.method == \'POST\': \n        data = flask.request.form[\'data\'] \n        print(data)\n        resp = {"data": data}\n        output = flask.json.dumps(data)\n    else:\n        # 將 Python 中的 dictionary 資料透過 json 格式送出後\n        # 讓遠端的 Dart 程式可以擷取\n        data = {"a": 1, "b": data+"yen", "c": "字串"}\n        output = flask.json.dumps(data)\n    return output\n     \n@app.route(\'/<name>\', methods=[\'POST\', \'GET\'])\ndef convert(name):\n    #name[-1] 為字串最後一個字元\n    # name[:-1] 則為數字\n    if name[-1] is "F" or name[-1] is "f":\n        # 表示要將華氏溫度轉為攝氏\n        return FtoC(name[:-1])\n    else:\n        return CtoF(name[:-1])\n     \n#celsius = 5/9 ( fahrenheit − 32)\n#定義一個 celsius 轉 fahrenheit  函式\ndef CtoF(c):\n    return "攝氏" + c + "度=華氏" + str(round(int(c)*9/5 + 32, 2)) + "度"\n \n#定義一個 celsius 轉 fahrenheit  函式\ndef FtoC(f):\n    return "華氏" + f + "度=攝氏" + str(round((int(f) - 32)*5/9, 2)) + "度"\n \n \nif __name__ == \'__main__\':\n    # 內建的 Flask Web 啟動埠號為 5000\n    app.run() \n What can these programs do to the mechanical design process? \n Flutter  mobile frontend and Python backend? \n Learning Python? \n Login to gm account and download \n 2019_ABeginnersGuideToPython3Programming.pdf \n and \n 2019_AdvancedGuideToPython3Programming.pdf \n Learning Dart and Flutter? \n Login to gm account and download\xa0 \n 2020_ QuickStartGuideToDartProgramming.pdf \n and \n 2019_BeginningAppDevelopmentWithFlutter.pdf \n Flutter  mobile frontend, Python backend and  CoppeliaSim  through  remote API ? \n Flutter  mobile frontend,  Cython  backend and  Solvespace  through  Python Geometric Constranin Solver ? \n Learning C++? \n Login to gm account and download  2018_Book_BeginningC17.pdf . \n Also check into  MSYS2  for reference. \n Where can we save the data during a web/mobile frontend and backend based design process? \n Login to gm account and download \n 2019_BuildingRESTAPIsWithFlask.pdf \xa0 \n and \n 2010_TheDefinitiveGuideToSQLite.pdf \n Also check into\xa0 https://github.com/chiamingyen/pygrouf ,\xa0 https://github.com/mdecourse/wcms-scrum1 \xa0and\xa0 https://wcms-scrum1.herokuapp.com/gear_index \xa0for reference. \n Recall application of  Pro/Weblink \n Take  Pro/Weblink  as an example. Javascript is used as the frontend working with a local host Pro/Engineer under the trusted Internet Explorer environment to enable programmable 3d mechanical Part and Assembly processes. \n Download  2002_ProEweblinkUserGuide.pdf \n', 'tags': '', 'url': 'Mechanical Design.html'}, {'title': 'Topic1Author', 'text': 'Login to your gm account and download  2019_DesigningElectronicProductEnclosures.pdf \xa0(where the topic1 material taken from) \n Author’s Credentials \n By listing some of the corporations where I have worked, this should provide some background on where my experience comes from. \n Lincoln Electric Company \n I started in the drafting room running blue prints in 1964. By taking night school classes in drafting, I soon was given the chance to apprentice as a tool and die designer where I got experience in the basic skills of designing jigs and fixtures. Lincoln Electric is "world famous" for their profit sharing program and work ethic. (I would later teach beginning drafting at Chabot College, California, in 1980). \n Lawrence Livermore National Laboratory \n My first job after getting my master’s degree in mechanical engineering (from the University of Arizona, 1977) was in the Material Fabrication Group. Our mission to design and build a lathe capable of 0.000001 inch accuracy provided great experience. Additional experience in the design of experiments for laboratory programs proved invaluable for future work. \n Intel Corporation \n This is my first experience with the design of computer housings for "silicon valley." Intel was just expanding beyond chips and printed circuit board products, and they had plans to get into building computer systems. I’m on the cover of "Intel News" shown trying to measure fan noise of a prototype "tower computer" in 1982. I was very fortunate to experience the tremendous work ethic in the culture at Intel. \n Sytek Corporation \n This is my first design position where I had the responsibility of taking my own design thru all the stages of prototyping, tooling, testing, and manufacturing delivery. We installed our first CAD systems (CADAM) in 1986. \n This is the first company where I assumed some management responsibility and thus saw a more complete picture of where (mechanical) product design fits into a larger picture of the entire product delivery process. \n Trimble Navigation Limited \n This is my first designer position where I designed and documented with a CAD system (AutoCAD). \n My work here spanned nearly 25 years from 1988 thru 2013. We installed our first 3D CAD system (ProEngineer) in 1992. Trimble’s products (portable GPS instruments) are intended to work in outdoor environments, and their customers need these products to function under adverse conditions (shock, vibration, temperature extremes, rain). \n I spent my early years in the Marine Division, moved on to the Survey Division, and became manager of a Mechanical Engineering Group in 1995. While manager, I was responsible for budgeting, resourcing, prioritization, design, and documentation. I also served as (overall) project manager on a number of projects and thus experienced how the "mechanical piece" fits into the overall design of products.   All of the above corporations had different accepted working processes for overall product design and different corporate cultures to operate in. It’s hoped that most of the words written here serve as a valuable contribution to the reader’s design process regardless of the corporate cultures they are in. The above work resume certainly spans a history of both how computers came to be used in the design process and how the industries evolved in their design processes. The design tools and products made for the marketplace will continue to evolve in the future, but we will still need basic mechanical design fundamentals to positively affect the overall product design process.', 'tags': '', 'url': 'Topic1Author.html'}, {'title': 'Project', 'text': '專案執行流程: \n Grouping - 分組 \n Design - 設計 \n Deliverables-交付結果 \n Presentation-發表 \n Grading-評分 \n W1-W4:\xa0 亂數分組並開始執行專案一 \n http://www.coppeliarobotics.com/helpFiles/index.html \n W5-W8:\xa0 專案二 \n https://cyberbotics.com/doc/guide/index \n W9: 期中報告 \n W10-W13:\xa0專案三 \n Onshape Education \n Self-paced Course \n W14-W17: 專案四 \n 協同產品設計專案 \n W18: 期末報告', 'tags': '', 'url': 'Project.html'}, {'title': 'Dart', 'text': 'https://flutter.dev/docs/reference/tutorials \n https://www.raywenderlich.com/4529993-getting-started-with-flutter \n https://www.raywenderlich.com/flutter/ \n https://github.com/SpinlockLabs/github.dart \n https://book.flutterchina.club/ \n https://github.com/CarGuo/gsy_flutter_book \n https://www.youtube.com/playlist?list=PLV2Iw811jLpWdAHToUqTuWYhYbjVfwS80 \n https://flutterbyexample.com/', 'tags': '', 'url': 'Dart.html'}, {'title': 'SQLite', 'text': 'Build iOS Database Apps with Swift and SQLite (2016) \n https://link.springer.com/book/10.1007/978-1-4842-2232-4 \n Introducing SQLite for Mobile Developers (2015) \n https://link.springer.com/book/10.1007/978-1-4842-1766-5 \n The Definitive Guide to SQLite (2010) \n https://link.springer.com/book/10.1007/978-1-4302-3226-1 \n SQLite3 and C: \n Compiled with  MSYS2 \xa0and  SQLite3 : \n gcc sqlite_ex.c -lsqlite3 -o sqlite_ex.exe \n sqlite_ex.c query vocabulary from\xa0 https://github.com/mdecourse/lookupdict/blob/master/webster_vocabulary.sqlite \n sqlite_ex.c source code: \n #include <sqlite3.h>\n#include <stdio.h>\n\nint callback(void *, int, char **, char **);\n\nint main(void) {\n    \n    sqlite3 *db;\n    char *err_msg = 0;\n    \n    int rc = sqlite3_open("webster_vocabulary.sqlite", &db);\n    \n    if (rc != SQLITE_OK) {\n        \n        fprintf(stderr, "Cannot open database: %s\\n", \n                sqlite3_errmsg(db));\n        sqlite3_close(db);\n        \n        return 1;\n    }\n    \n    char *sql = "SELECT * FROM word where word=\'ABORT\'";\n        \n    rc = sqlite3_exec(db, sql, callback, 0, &err_msg);\n    \n    if (rc != SQLITE_OK ) {\n        \n        fprintf(stderr, "Failed to select data\\n");\n        fprintf(stderr, "SQL error: %s\\n", err_msg);\n\n        sqlite3_free(err_msg);\n        sqlite3_close(db);\n        \n        return 1;\n    } \n    \n    sqlite3_close(db);\n    \n    return 0;\n}\n\nint callback(void *NotUsed, int argc, char **argv, \n                    char **azColName) {\n    \n    NotUsed = 0;\n    \n    for (int i = 0; i < argc; i++) {\n\n        printf("%s = %s\\n", azColName[i], argv[i] ? argv[i] : "NULL");\n    }\n    \n    printf("\\n");\n    \n    return 0;\n} \n SQLite3 and Python: \n https://github.com/mdecourse/wcms-scrum1 \n SQLite3 and Dart: \n dart:ffi only for mobile and desktop \n from\xa0 https://www.sqlite.org/download.html \xa0download\xa0C source code as an amalgamation \n use  MSYS2 : \n gcc -shared sqlite3.c -o sqlite3.dll \n to get sqlite3.dll \n use git\xa0sparse-checkout from\xa0 https://github.com/dart-lang/sdk \xa0get \n https://github.com/dart-lang/sdk/tree/master/samples/ffi/sqlite \n cd y:\\tmp mkdir dart_sqlite cd dart_sqlite git init git config core.sparsecheckout true git remote add -f origin https://github.com/dart-lang/sdk.git echo samples/ffi/sqlite >> .git/info/sparse-checkout git pull origin master \n cd y:\\tmp\\ samples\\ffi\\sqlite \n pub get \n copy sqlite3.dll and  webster_vocabulary.sqlite  into\xa0y:\\tmp\\ samples\\ffi\\sqlite\\example \n use SciTE to execute main.dart: \n import "../lib/sqlite.dart";\n\nvoid main() {\n  Database d = Database("webster_vocabulary.sqlite");\n\n  Result result = d.query("select * from word where word=\'ABORT\';");\n  for (Row r in result) {\n    //String name = r.readColumnByIndex(1);\n    String word = r.readColumn("word");\n    String defn = r.readColumn("defn");\n    //print("$name $word $defn");\n    print("單字:$word 解說: $defn");\n  }\n  d.close();\n}\n \n package:js  is for web \n https://github.com/simolus3/moor/blob/master/moor/lib/src/web/sql_js.dart \n References: \n https://pub.dev/packages/f_orm_m8_sqlite \n \n', 'tags': '', 'url': 'SQLite.html'}, {'title': 'Fossil SCM', 'text': 'https://www.fossil-scm.org/ \n', 'tags': '', 'url': 'Fossil SCM.html'}, {'title': 'Jupyterlab', 'text': 'https://github.com/jupyterlab/jupyterlab \n', 'tags': '', 'url': 'Jupyterlab.html'}, {'title': 'AI', 'text': 'https://artint.info/2e/html/ArtInt2e.html \n https://github.com/SullyChen/Autopilot-TensorFlow \n https://towardsdatascience.com/how-a-high-school-junior-made-a-self-driving-car-705fa9b6e860 \n https://github.com/UvinduW/RCAutopilot \n', 'tags': '', 'url': 'AI.html'}]};