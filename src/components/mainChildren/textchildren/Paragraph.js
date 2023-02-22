function Paragraph({paragraghHeader, paragraghText}) {
  return (
    <div>
    <h3 className="paragraph-header">{paragraghHeader}</h3>
    <p className="paragraph-text">{paragraghText}</p>
    </div>
  )
}

export default Paragraph;