currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
//// [/a.ts]
function foo() {
   const p = 1;
   function bar() {
       console.log("Testing");
   }
   console.log("yes");
}
class bar {
    constructor() {
        function a() {
           function aa() {
               console.log("have a good day");
           }
            
        }
        a();
        function b() {
           function c() {
               export const testing = 1;
               const test = 1 + testing + 3;
           }
        }
        b();
    }
    c() {
        console.log("hello again");
        function k() {
            const happy = banana + avocados;
        }
    }
}

//// [/b.ts]
export const juice = 1;
export const sauce = 2;
export const fig = 3;
export const tomato = 4;

//// [/lib.d.ts]
lib.d.ts-Text

//// [/lib.decorators.d.ts]
lib.decorators.d.ts-Text

//// [/lib.decorators.legacy.d.ts]
lib.decorators.legacy.d.ts-Text

//// [/tsconfig.json]
{ "files": ["a.ts", "b.ts"] }


Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 0,
      "type": "request",
      "arguments": {
        "file": "/a.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /a.ts ProjectRootPath: undefined:: Result: /tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /tsconfig.json 2000 undefined Project: /tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/tsconfig.json",
        "reason": "Creating possible configured project for /a.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /tsconfig.json : {
 "rootNames": [
  "/a.ts",
  "/b.ts"
 ],
 "options": {
  "configFilePath": "/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /b.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.decorators.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.decorators.legacy.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/a.ts SVC-1-0 "function foo() {\n   const p = 1;\n   function bar() {\n       console.log(\"Testing\");\n   }\n   console.log(\"yes\");\n}\nclass bar {\n    constructor() {\n        function a() {\n           function aa() {\n               console.log(\"have a good day\");\n           }\n            \n        }\n        a();\n        function b() {\n           function c() {\n               export const testing = 1;\n               const test = 1 + testing + 3;\n           }\n        }\n        b();\n    }\n    c() {\n        console.log(\"hello again\");\n        function k() {\n            const happy = banana + avocados;\n        }\n    }\n}"
	/b.ts Text-1 "export const juice = 1;\nexport const sauce = 2;\nexport const fig = 3;\nexport const tomato = 4;"


	lib.d.ts
	  Default library for target 'es5'
	lib.decorators.d.ts
	  Library referenced via 'decorators' from file 'lib.d.ts'
	lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file 'lib.d.ts'
	a.ts
	  Part of 'files' list in tsconfig.json
	b.ts
	  Part of 'files' list in tsconfig.json

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/a.ts",
        "configFile": "/tsconfig.json",
        "diagnostics": []
      }
    }
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /a.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 0,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      }
    }
After Request
watchedFiles::
/b.ts: *new*
  {"pollingInterval":500}
/lib.d.ts: *new*
  {"pollingInterval":500}
/lib.decorators.d.ts: *new*
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts: *new*
  {"pollingInterval":500}
/tsconfig.json: *new*
  {"pollingInterval":2000}

Projects::
/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/a.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /tsconfig.json *default*
/b.ts *new*
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/lib.d.ts *new*
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/lib.decorators.d.ts *new*
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/lib.decorators.legacy.d.ts *new*
    version: Text-1
    containingProjects: 1
        /tsconfig.json

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 1,
      "type": "request",
      "arguments": {
        "formatOptions": {
          "indentSize": 4,
          "tabSize": 4,
          "newLineCharacter": "\n",
          "convertTabsToSpaces": true,
          "indentStyle": 2,
          "insertSpaceAfterConstructor": false,
          "insertSpaceAfterCommaDelimiter": true,
          "insertSpaceAfterSemicolonInForStatements": true,
          "insertSpaceBeforeAndAfterBinaryOperators": true,
          "insertSpaceAfterKeywordsInControlFlowStatements": true,
          "insertSpaceAfterFunctionKeywordForAnonymousFunctions": false,
          "insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,
          "insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets": false,
          "insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces": true,
          "insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces": false,
          "insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces": false,
          "insertSpaceBeforeFunctionParenthesis": false,
          "placeOpenBraceOnNewLineForFunctions": false,
          "placeOpenBraceOnNewLineForControlBlocks": false,
          "semicolons": "ignore",
          "trimTrailingWhitespace": true,
          "indentSwitchCase": true
        }
      },
      "command": "configure"
    }
Info seq  [hh:mm:ss:mss] Format host information updated
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 1,
      "success": true
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 2,
      "type": "request",
      "arguments": {
        "file": "/a.ts",
        "pastedText": [
          "juice",
          "sole.log(sauce + juice);",
          "fig + kiwi",
          "function k() {\n            const cherry =tomato + kiwi;\n        }"
        ],
        "pasteLocations": [
          {
            "start": {
              "line": 4,
              "offset": 20
            },
            "end": {
              "line": 4,
              "offset": 29
            }
          },
          {
            "start": {
              "line": 12,
              "offset": 19
            },
            "end": {
              "line": 12,
              "offset": 47
            }
          },
          {
            "start": {
              "line": 20,
              "offset": 29
            },
            "end": {
              "line": 20,
              "offset": 43
            }
          },
          {
            "start": {
              "line": 27,
              "offset": 9
            },
            "end": {
              "line": 29,
              "offset": 10
            }
          }
        ]
      },
      "command": "getPasteEdits"
    }
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /tsconfig.json
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /tsconfig.json projectStateVersion: 2 projectProgramVersion: 1 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (5)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/a.ts SVC-1-1 "function foo() {\n   const p = 1;\n   function bar() {\n       console.log(juice);\n   }\n   console.log(\"yes\");\n}\nclass bar {\n    constructor() {\n        function a() {\n           function aa() {\n               console.log(sauce + juice);\n           }\n            \n        }\n        a();\n        function b() {\n           function c() {\n               export const testing = 1;\n               const test = fig + kiwi3;\n           }\n        }\n        b();\n    }\n    c() {\n        console.log(\"hello again\");\n        function k() {\n            const cherry =tomato + kiwi;\n        }\n    }\n}"
	/b.ts Text-1 "export const juice = 1;\nexport const sauce = 2;\nexport const fig = 3;\nexport const tomato = 4;"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "getPasteEdits",
      "request_seq": 2,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      },
      "body": {
        "edits": [
          {
            "fileName": "/a.ts",
            "textChanges": [
              {
                "start": {
                  "line": 1,
                  "offset": 1
                },
                "end": {
                  "line": 1,
                  "offset": 1
                },
                "newText": "import { sauce, juice, fig, tomato } from \"./b\";\n\n"
              },
              {
                "start": {
                  "line": 4,
                  "offset": 20
                },
                "end": {
                  "line": 4,
                  "offset": 29
                },
                "newText": "juice"
              },
              {
                "start": {
                  "line": 12,
                  "offset": 19
                },
                "end": {
                  "line": 12,
                  "offset": 47
                },
                "newText": "sole.log(sauce + juice);"
              },
              {
                "start": {
                  "line": 20,
                  "offset": 29
                },
                "end": {
                  "line": 20,
                  "offset": 43
                },
                "newText": "fig + kiwi"
              },
              {
                "start": {
                  "line": 27,
                  "offset": 9
                },
                "end": {
                  "line": 29,
                  "offset": 10
                },
                "newText": "function k() {\n            const cherry =tomato + kiwi;\n        }"
              }
            ]
          }
        ],
        "fixId": "providePostPasteEdits"
      }
    }
After Request
Projects::
/tsconfig.json (Configured) *changed*
    projectStateVersion: 3 *changed*
    projectProgramVersion: 1
    dirty: true *changed*

ScriptInfos::
/a.ts (Open) *changed*
    version: SVC-1-2 *changed*
    containingProjects: 1
        /tsconfig.json *default*
/b.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /tsconfig.json
