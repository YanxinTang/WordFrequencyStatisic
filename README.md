# 词频统计[Nodejs]

## 1. 介绍
利用Trie数据结构构建单词树，将统计结果构建堆进行排序，实现词频大到小输出单词的功能

## 2. 使用

处理文本为`src/example.txt`所示格式

```javascript
node main.js
```

输出

```
the 6
in 5
of 5
he 4
as 2
Peter 2
Gosse 2
became 2
guest 1
Director 1
International 1
Institute 1
Leipzig, 1
Literary 1
Becher" 1
R. 1
"Johannes 1
poetry 1
lecturer 1
from 1
been 1
Sächsischen 1
Since 1
1993. 1
1985 1
1968. 1
East 1
where 1
writer 1
worked 1
engineer, 1
Arts). 1
Academy 1
Akademie 1
Afterwards, 1
Moscow. 1
is 1
Germany 1
commissioned 1
technology 1
has 1
Künste 1
high 1
occupation 1
freelance 1
since 1
study 1
at 1
first 1
and 1
President 1
completed 1
der 1
PEN 1
frequency 1
(Saxon 1
deputy 1
member 1
Professor 1
2008, 1
USA. 1

```

## 3. 构建

```
git clone https://github.com/YanxinTang/WordFrequencyStatisic.git

cd WordFrequencyStatisic

yarn install

yarn build
```
