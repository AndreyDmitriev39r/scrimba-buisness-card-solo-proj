import Paragraph from "./textchildren/Paragraph";

function Text() {
  const textContent = [
    {
      'paragraghHeader': 'About',
      'paragraghText': 'Professional grass-consumer. No idea how much experience I have, I do not know numbers. I\'ve been eating grass every morning and every evening since I remember tho.' 
    },
    {
      'paragraghHeader': 'Interests',
      'paragraghText': 'Swimming and resting along the banks of our river. Also making fools from jaguars and whatever other folks who trying to catch me.'
    }
  ];  
  
  const paragraphs = textContent.map((item)=>
    <Paragraph
      key={item.paragraghHeader}
      paragraghHeader={item.paragraghHeader}
      paragraghText={item.paragraghText}
    />
  )
  return (
    <section className="texts-section">
      {paragraphs}
    </section>
  )
}

export default Text;