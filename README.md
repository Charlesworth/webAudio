# webAudio

# audio protocol description

Each element is half a second, the protocol comprises of a starting signal of two tones followed by an 8 element payload:

    /0.5s/0.5s/0.5s/0.5s/0.5s/0.5s/0.5s/0.5s/0.5s/0.5s/
    <--------><---><---><---><---><---><---><--->---->
     Start of              8 digit code
      frame

- Start of frame: This should be control 0 followed by control 1
- 8 digit code: This is the code to be transfered, comprised of signal 0 - 9

| Frequency Bucket  | Target Frequency |  Signal  |
|-------------------|------------------|----------|
|0 -> 258           |129               |control 0 |
|259 -> 516         |387               |control 1 |
|517 -> 775         |646               |0         |
|776 -> 1033        |904               |1         |
|1034 -> 1291       |1162              |2         |
|1292 -> 1550       |1421              |3         |
|1551 -> 1808       |1679              |4         |
|1809 -> 2067       |1938              |5         |
|2068 -> 2325       |2196              |6         |
|2326 -> 2583       |2454              |7         |
|2584 -> 2842       |2713              |8         |
|2843 -> 3100       |2971              |9         |