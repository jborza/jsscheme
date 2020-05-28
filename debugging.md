# Debugging in VSCode with input/output on the terminal

Use a launch configuration (launch.json) with console: integratedTerminal such as:

```
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}/scheme.js",
            "console": "integratedTerminal"
        }
    ]
```