const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    theme: '#FADFA3',
    fixed: true,
    mini: true,
    preload: 'auto',
    order: 'random',
    mutex: true,
    listFolded: true,
    listMaxHeight: 90,
    lrcType: 1,
    audio: [
      {
        name: "从你的全世界路过",
        artist: '纯音乐',
        url: 'https://m10.music.126.net/20181031111529/79ca1ae73c7b20cd1e36afc666073756/ymusic/8ce1/d5b8/a0d0/5c3014b5b559da4a314a4763ebc0632a.mp3',
        cover: 'http://p2.music.126.net/O89Ae7dCtDzYFChkeQedWg==/17745018161034403.jpg?param=130y130',
        lrc: '[00:00.00]纯音乐无歌词'
      },

    ]
});
