if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())
    a = []
    for i in range(x+1):
        for j in range(y+1):
            for k in range(z+1):
                cur = []
                cur.append(i)
                cur.append(j)
                cur.append(k)
                sum = i + j + k
                if sum == n:
                    continue
                else:
                    a.append(cur)
    print(a)
