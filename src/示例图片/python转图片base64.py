import base64
import os

print(os.getcwd())  # 获取当前工作目录路径
print(os.path.abspath('.'))  # 获取当前工作目录路径
print(os.path.abspath('test.txt'))  # 获取当前目录文件下的工作目录路径
print(os.path.abspath('../'))  # 获取当前工作的父目录 ！注意是父目录路径
print(os.path.abspath(os.curdir))  # 获取当前工作目录路径

# 二进制方式打开图片
f = open(os.path.abspath(os.curdir)+'\\src\\示例图片\\route_Link_params.png', 'rb')
# f.
ls_f = base64.b64encode(f.read())  # 读取文件内容转为base64编码
f.close()
print('----------------------------')
print(ls_f)
# file = open('route_Link_paramsCopy.txt', 'w')
# file.write(ls_f)
# file.close()
# print(ls_f)
