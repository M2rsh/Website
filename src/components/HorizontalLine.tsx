import cat from '~/images/cat_ascii_smoller.svg';


export default function HorizontalLine() {
  return (
    <div style={{display: 'flex', "justify-content": 'space-between'}}>
        <span>////----</span>
        <img src={cat} width={60} alt="smol cat"></img>
        <span>----&bsol;&bsol;&bsol;&bsol;</span>
    </div>
  );
}
