import subprocess

filename = 'testcases'

def skip_line(line):
    return len(line) == 0 or line.startswith('#')

def is_input(line):
    return line.startswith('->')

with open(filename,'r') as f:
    lines = f.readlines()
    lines = [line.strip() for line in lines if not skip_line(line)]

    #TODO start up new interpreter process
    #feed all lines that are not input lines

    for line in lines:
        print(line)
    
