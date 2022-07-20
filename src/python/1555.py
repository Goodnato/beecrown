import math

def r(x, y):
    return math.pow((3 * x), 2) + math.pow(y, 2)

def b(x, y):
    return 2 * math.pow(x, 2) + math.pow(5 * y, 2)

def c(x, y):
    return -100 * x + math.pow(y, 3)

N = int(input())

for x in range(N):
    line = input().split(" ")
    x = int(line[0])
    y = int(line[1])

    rafa = r(x, y)
    beto = b(x, y)
    carlos = c(x, y)

    if rafa > beto and rafa > carlos:
        print("Rafael ganhou")
    elif beto > rafa and beto > carlos:
        print("Beto ganhou")
    else:
        print("Carlos ganhou")