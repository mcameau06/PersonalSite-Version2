import heapq
string = ["r","rfw","wfvs","savae","afwc"]

aw = len(string)

for i in range(aw//2):
    a = string[aw-i-1]
    string[aw-i-1] = string[i]
    string[i] = a

print(string)