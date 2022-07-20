namesFeedack = {"Rolien", "Naej", "Elehcim", "Odranoel"}

N = tonumber(io.read())

for i = 1, N, 1 do
    K = tonumber(io.read())
    for ii = 1, K, 1 do
        F = tonumber(io.read())
        print(namesFeedack[F])
    end
end