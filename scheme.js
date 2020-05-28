function createInitialState() {
    return {
        dictionary: [],
        input: undefined, //line being parsed

        initializeBuiltinForms: function(){
            //TODO special forms
        },
        
        defineWord: function(word, body){
            this.dictionary[word] = body;
        },

        evaluateLine: function(line){
            this.input = line;
            while (this.input !== undefined) {
                let nextToken = this.getNextInputWord();
                if (nextToken === undefined) {
                    break;
                }
                if (!this.evaluateToken(nextToken)) {
                    return;
                }
            }
        },

        evaluateToken: function(token){
            print('consumed token: '+token);
            return true;
        },

        getNextInputWord: function () {
            return this.getNextDelimitedWord(' ');
        },

        getNextDelimitedWord: function (delimiter) {
            //trim leading spaces
            if (this.input === undefined) {
                return '';
            }
            this.input = this.input.trimStart();
            let index = this.input.indexOf(delimiter);
            if (index == -1) {
                index = this.input.length;
            }
            let word = this.input.substring(0, index);
            if (this.input.length > index + 1)
                this.input = this.input.substring(index + 1);
            else
                this.input = undefined;
            return word;
        },
    }
}

function schemeFlagToBoolean(flag){
    if(flag === "#t")
        return true;
    else if(flag == "#f")
        return false;
    else
        return undefined;
}

function booleanToSchemeFlag(boolean) {
    return boolean ? "#t" : "#f";
}

function print(x) {
    process.stdout.write(x);
}

let noprompt = false;

function repl() {
    let stdin = process.openStdin();
    let state = createInitialState();
    state.initializeBuiltinForms();
    if (process.argv.includes('/noprompt')) {
        noprompt = true;
    }
    if (noprompt === false) {
        print('> ')
    }

    stdin.addListener("data", function (line) {
        let trimmedLine = line.toString().trim();
        state.evaluateLine(trimmedLine);
    });
}

repl();