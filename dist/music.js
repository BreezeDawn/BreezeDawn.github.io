const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    theme: '#FADFA3',
    fixed: true,
    mini: true,
    mutex: true,
    audio: [
      {
        name: "从你的全世界路过",
        artist: '纯音乐',
        url: 'http://music.163.com/song/media/outer/url?id=433103084.mp3',
        cover: 'http://p2.music.126.net/O89Ae7dCtDzYFChkeQedWg==/17745018161034403.jpg?param=130y130',
      },
    ]
});

