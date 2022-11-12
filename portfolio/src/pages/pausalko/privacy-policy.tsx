import React from "react"
import { Layout, Seo } from "../../components"

const PrivacyPolicy = () => (
  <Layout>
    <div className="wrapper">
      <h1>Paušalac - Privacy Policy</h1>
      <p>
        Paušalac ne snosi odgovornost za eventualne greške u izračunu iznosa
        plaćanja te datuma navedenih kao rok plaćanja. Sve detaljnije upute i
        pravila o porezu na dohodak te ostalim obvezama možete pronaći na
        stranicama{" "}
        <a href="https://www.porezna-uprava.hr" target="_blank">
          Porezne uprave
        </a>{" "}
        i na stranicama{" "}
        <a href="https://plaviured.hr" target="_blank">
          Plavog Ureda
        </a>
        .
      </p>
      <p>
        Svi izračuni unutar aplikacije su okvirni i ne služe za utvrđivanje
        konačnih poreznih i drugih obveza. Obveznicima koji su uz radni odnos i
        obrtnici paušalisti Porezna uprava rješenjem utvrđuje obveze i osnovice
        te obračun iznosa doprinosa prema godišnjoj osnovici. Rješenje se donosi
        protekom obračunskog razdoblja (kalendarske godine) u kojoj je nastala
        obveza.
      </p>
      <p>
        Paušalko ne snosi odgovornost za eventualna kašnjenja u plaćanju kao i
        pogreške prilikom plaćanja istih.
      </p>
      <p>
        Za dodatna pitanja ili komentare kontaktirajte me na mail:
        danijel.vincijanovic@gmail.com
      </p>
      <p>Izrađeno sa ❤️.</p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Paušalac - Privacy Policy" />

export default PrivacyPolicy
