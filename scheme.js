function createInitialState() {
    return {
        dictionary: [],

        initializeBuiltinForms: function(){

        },
        
        defineWord: function(word, body){
            this.dictionary[word] = body;
        },

        evaluateLine: function(line){
            
        }
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
        console.log('? ')
    }

    stdin.addListener("data", function (line) {
        let trimmedLine = line.toString().trim();
        state.evaluateLine(trimmedLine, !noprompt);
    });
}

repl();