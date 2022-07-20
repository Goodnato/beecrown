getInput = input()
line = getInput.split(" ")

days = int(line[0])
totalMoneyDays = int(line[1])
minValue = totalMoneyDays

for i in range(days):
    moneyDay = int(input())
    totalMoneyDays += moneyDay

    if totalMoneyDays < minValue:
        minValue = totalMoneyDays

print(minValue)
