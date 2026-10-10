
import './HealthPartners.css'

function HealthPartners() {
  const partners = [
    { name: 'Shopcare', style: 'shopcare' },
    { name: 'CLINIZA', style: 'cliniza' },
    { name: 'FITbody', style: 'fitbody' },
    { name: 'Organica', style: 'organica' },
    { name: 'BMT', style: 'bmt' },
  ]

  return (
    <section className="health-partners">
      <div className="partners-container">
        <h2>Our Health Partners</h2>

        <p className="partners-description">
          Research organizations that collaborate on medical research,
          healthcare innovation and the development of new medical
          technologies and treatments.
        </p>

        <div className="partners-logos">
          {partners.map((partner) => (
            <div
              className={`partner-logo ${partner.style}`}
              key={partner.name}
            >
              {partner.style === 'shopcare' && (
                <span className="shopcare-icon">🛒</span>
              )}

              {partner.style === 'fitbody' && (
                <span className="fitbody-icon">🏃</span>
              )}

              {partner.style === 'organica' && (
                <span className="organica-icon">◈</span>
              )}

              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HealthPartners
