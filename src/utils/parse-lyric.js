/*
歌词格式：
[00:41.060]夏天快要过去
*/

const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export const parseLyric = (lyricString) => {
    let lyricArr = lyricString.split('\n')

    const lyrics = []
    lyricArr.forEach(line=>{
        if(line){
            const result = parseExp.exec(line)
            const time1 = result[1] * 60 * 1000
            const time2 = result[2] * 1000
            const time3 = result[3].length === 3 ? result[3]*1 : result[3]*10
            const time = time1 + time2 + time3
            // console.log(time);
            const content = line.replace(parseExp,"").trim()
            // console.log(content);
            const lineObj = {
                time,
                content
            }
            lyrics.push(lineObj)
        }
    })
    // console.log(lyrics);
    return lyrics
}