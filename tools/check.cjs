const fs=require('fs'),path=require('path');const {createCanvas,GlobalFonts}=require('@napi-rs/canvas');const root=path.resolve(__dirname,'..');
if(!GlobalFonts.registerFromPath(path.join(root,'fonts/MARQUEE-Heavy.ttf'),'MarqueeTest'))throw Error('Font rejected');
GlobalFonts.registerFromPath(path.join(root,'sources/Michroma-Regular.ttf'),'SourceMichroma');
const c=createCanvas(1600,1150),x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,1600,1150);x.fillStyle='#35434D';x.font='24px sans-serif';x.fillText('MARQUEE Heavy — font build specimen',60,60);
x.font='140px MarqueeTest';x.fillText('MARQUEE',60,220);
x.font='22px sans-serif';x.fillText('Original Michroma + approved outline and 99% height (reference)',60,290);
x.save();x.translate(60,455);x.scale(1,.99);x.font='140px SourceMichroma';x.lineWidth=140*.052;x.strokeStyle='#35434D';x.strokeText('MARQUEE',0,0);x.fillText('MARQUEE',0,0);x.restore();
x.font='42px MarqueeTest';let lines=['ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz','0123456789  !? @#% & () [] / + =','AV AW AY VA WA YA To Ta Te Yo','ÀÁÂÃÄÅ ÇÈÉÊË ÌÍÎÏ ÑÒÓÔÕÖ ØÙÚÛÜ Ý','àáâãäå çèéêë ìíîï ñòóôõö øùúûü ýÿ','The quick brown fox jumps over the lazy dog.'];lines.forEach((s,i)=>x.fillText(s,60,560+i*72));fs.writeFileSync(path.join(root,'SPECIMEN.png'),c.toBuffer('image/png'));console.log('Font registered and specimen rendered.');
