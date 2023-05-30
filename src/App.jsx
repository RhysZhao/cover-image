/*
 * Author  rhys.zhao
 * Date  2023-05-30 17:57:59
 * LastEditors  rhys.zhao
 * LastEditTime  2023-05-30 19:10:32
 * Description 主页
 */
import { useState } from 'react';
import styles from './App.module.scss';

import Input from './components/Input';
import Button from './components/Button';

import html2canvas from 'html2canvas';
import binaryConverter from 'binary-convert';

function App() {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(400);
  const [color, setColor] = useState('#000');
  const [backgroundColor, setBackgroundColor] = useState('#f2db5f');
  const [text, setText] = useState('React');

  // 导出封面图片
  const onExport = () => {
    console.log('-- 导出封面图片 --');
    const exportDom = document.getElementById('coverImage');
    html2canvas(exportDom).then((canvas) => {
      const base64 = canvas.toDataURL({ format: 'image/png', quality: 1, width: 12000, height: 4000 });
      binaryConverter.toBlob(base64).then((blobData) => {
        binaryConverter.downloadFileByBlob(blobData, '封面');
      });
    });
  };

  return (
    <div className={styles.app}>
      <div className={styles.configWrap}>
        <div className={styles.item}>
          <span className={styles.label}>宽：</span>
          <Input value={width} onChange={(e) => setWidth(e.target.value)} />
          <span className={styles.label}>高：</span>
          <Input value={height} onChange={(e) => setWidth(e.target.value)} />
        </div>
        <div className={styles.item}>
          <span className={styles.label}>文本内容：</span>
          <Input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className={styles.item}>
          <span className={styles.label}>背景色：</span>
          <Input disabled value={backgroundColor} />
          <input
            type='color'
            onInput={(e) => {
              console.log('input', e.target.value);
            }}
            onChange={(e) => {
              console.log('change', e.target.value);
              setBackgroundColor(e.target.value);
            }}
          />
        </div>
        <div className={styles.item}>
          <span className={styles.label}>字体颜色：</span>
          <Input disabled value={color} />
          <input
            type='color'
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
        </div>
      </div>

      <div id='coverImage' className={styles.coverImage} style={{ color, backgroundColor }}>
        {text}
      </div>

      <div className={styles.buttonWrap}>
        <Button onClick={onExport}>导出封面图片</Button>
      </div>
    </div>
  );
}

export default App;
