import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FaUser, FaHome, FaFlask, FaHospitalAlt, FaLightbulb, FaClipboardList, FaPencilRuler, FaCheckCircle, FaSync, FaHandsHelping, FaCity, FaLaptopCode } from 'react-icons/fa';
import VR from './Images/VR.png';

// Main container
const JourneyContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #4B6079;
`;

const AnimatedLogo = styled(motion.img)`
  width: 800px;
  height: auto;

  @media (max-width: 768px) {
    width: 150px; /* Smaller size on mobile devices */
  }
`;

// Full-screen introduction section
const FullScreenIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;
  background-color: #4B6079;
  padding: 2rem;
  color: #fff;
`;

const Title = styled.h1`
  font-size: calc(2rem + 2vw);
  text-align: center;
  color: #fff;
`;

const Punchline = styled.h2`
  font-size: calc(1rem + 1vw);
  text-align: center;
  margin-top: 10px;
`;

const ScrollArrow = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  .chevron-icon {
    font-size: 24px;
    color: #fff;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
`;

// Section Container
const SectionContainer = styled.div`
  padding: 3rem 2rem;
  color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  color: #fff;
  margin-bottom: 1rem;
`;

// Scrollable row for cards
const ScrollView = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding: 3.5rem 0;

  /* Add some padding for smooth scrolling */
  &::-webkit-scrollbar {
    display: none;
  }
`;

// Individual Step Card
const StepCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;
  transition: all 0.3s ease;
  flex-shrink: 0; /* Prevent shrinking on scroll */

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 200px;
  }
`;

// Icon for steps
const StepIcon = styled.div`
  font-size: 3rem;
  color: #333;
  margin-bottom: 15px;
`;

// Step title
const StepTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

// Step description
const StepDescription = styled.p`
  color: #666;
  text-align: center;
  font-size: 1rem;
`;

// Main Component
const UserJourney = () => {
  return (
    <JourneyContainer>

      <FullScreenIntro>
        <Title>PRIMA Brukereise</Title>
        <Punchline>En visjon for eldreomsorg med VR-teknologi</Punchline>
        <AnimatedLogo src={VR} alt="VR Logo" />
        <ScrollArrow>
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
        </ScrollArrow>
      </FullScreenIntro>

{/* Aktører, metoder og relevante elementer */}
<SectionContainer>
  <SectionTitle>Aktører og metoder</SectionTitle>
  <ScrollView>
    
    {/* Aktører Section */}

    {/* Aktør: Studio 51 */}
     <StepCard whileHover={{ scale: 1.1 }}>
      <StepIcon>
        <FaLaptopCode />
      </StepIcon>
      <StepTitle>Studio 51</StepTitle>
      <StepDescription>
        Teknologisk utvikler som designer og optimaliserer VR-opplevelser.
      </StepDescription>
    </StepCard>
    
    {/* Aktør: Brukere */}
    <StepCard whileHover={{ scale: 1.1 }}>
      <StepIcon>
        <FaUser />
      </StepIcon>
      <StepTitle>Brukere (eldre)</StepTitle>
      <StepDescription>
        Eldre brukere som deltar aktivt i prosessen, gir verdifulle tilbakemeldinger og perspektiver.
      </StepDescription>
    </StepCard>

    {/* Aktør: Pårørende */}
    <StepCard whileHover={{ scale: 1.1 }}>
      <StepIcon>
        <FaHandsHelping />
      </StepIcon>
      <StepTitle>Pårørende</StepTitle>
      <StepDescription>
        Nære familiemedlemmer som bidrar med innsikt om brukernes behov og ønsker.
      </StepDescription>
    </StepCard>

    {/* Aktør: Bærum Kommune */}
    <StepCard whileHover={{ scale: 1.1 }}>
      <StepIcon>
        <FaCity />
      </StepIcon>
      <StepTitle>Bærum Kommune</StepTitle>
      <StepDescription>
        Samarbeider for å implementere innovative løsninger i eldreomsorgen.
      </StepDescription>
    </StepCard>

    {/* Aktør: Linnelia Sykehjem */}
    <StepCard whileHover={{ scale: 1.1 }}>
      <StepIcon>
      <FaHospitalAlt />
      </StepIcon>
      <StepTitle>Linnelia Sykehjem</StepTitle>
      <StepDescription>
        Samarbeider for å implementere innovative løsninger i sykehjemmet.
      </StepDescription>
    </StepCard>

    {/* Metoder Section */}
    
    {/* Metode: Design Thinking */}
    <StepCard whileHover={{ scale: 1.1 }}>
      <StepIcon>
        <FaLightbulb />
      </StepIcon>
      <StepTitle>Design Thinking</StepTitle>
      <StepDescription>
        En brukerorientert metode for å utvikle innovative løsninger.
      </StepDescription>
    </StepCard>

    {/* Metode: Brukerundersøkelser */}
    <StepCard whileHover={{ scale: 1.1 }}>
      <StepIcon>
        <FaClipboardList />
      </StepIcon>
      <StepTitle>Brukerundersøkelser</StepTitle>
      <StepDescription>
        Samler data og innsikt fra brukere for å forstå deres behov.
      </StepDescription>
    </StepCard>

    {/* Metode: Prototyping */}
    <StepCard whileHover={{ scale: 1.1 }}>
      <StepIcon>
        <FaPencilRuler />
      </StepIcon>
      <StepTitle>Prototyping</StepTitle>
      <StepDescription>
        Utvikling av tidlige versjoner av VR-løsninger for testing.
      </StepDescription>
    </StepCard>

    {/* Metode: Brukertesting */}
    <StepCard whileHover={{ scale: 1.1 }}>
      <StepIcon>
        <FaCheckCircle />
      </StepIcon>
      <StepTitle>Brukertesting</StepTitle>
      <StepDescription>
        Evaluering av VR-opplevelser gjennom tilbakemeldinger fra brukere.
      </StepDescription>
    </StepCard>

    {/* Metode: Iterativ utvikling */}
    <StepCard whileHover={{ scale: 1.1 }}>
      <StepIcon>
        <FaSync />
      </StepIcon>
      <StepTitle>Iterativ utvikling</StepTitle>
      <StepDescription>
        Kontinuerlig forbedring av løsninger basert på tilbakemeldinger og data.
      </StepDescription>
    </StepCard>

  </ScrollView>
</SectionContainer>

      {/* Brukerperspektiv Seksjon */}
<SectionContainer>
  <SectionTitle>Brukerens Perspektiv</SectionTitle>
  <ScrollView>

    {/* Trinn 1: Brukerinvolvering */}
    <StepCard whileHover={{ scale: 1.1 }}>
      <StepIcon><FaUser /></StepIcon>
      <StepTitle>Brukerinvolvering</StepTitle>
      <StepDescription>
        Eldre, som de primære fordelene av tjenesten, er aktivt involvert fra starten av prosessen. 
        I den innledende oppdagelsesfasen deltar eldre brukere i intervjuer, observasjonsstudier og 
        workshops hvor de deler sine personlige erfaringer, rutiner og helsebehov. Denne fasen 
        bidrar til å sikre at løsningen er dypt forankret i deres daglige virkelighet, og fanger opp 
        nyanser som ellers kunne blitt oversett. Deres involvering i denne fasen er avgjørende da 
        det gir prosjektteamet en bedre forståelse av deres smertepunkter og ambisjoner, som igjen 
        informerer designen av en brukerorientert VR-opplevelse skreddersydd for å møte disse 
        spesifikke behovene.
      </StepDescription>
    </StepCard>

    {/* Trinn 2: Brukertilbakemelding */}
    <StepCard whileHover={{ scale: 1.1 }}>
      <StepIcon><FaHandsHelping /></StepIcon>
      <StepTitle>Brukertilbakemelding</StepTitle>
      <StepDescription>
        Etter hvert som VR-teknologien utvikles og testes, er kontinuerlig tilbakemelding fra eldre 
        brukere integrert i den iterative prosessen med å forbedre løsningen. Brukerne interagerer 
        med de tidlige prototypene, og gir innsikt i deres erfaringer, utfordringer de møter med 
        grensesnittet, og deres tanker om innholdet. Denne tilbakemeldingssløyfen er kritisk for å 
        sikre at løsningen ikke bare forblir tilgjengelig og enkel å bruke, men også virkelig 
        forbedrer livskvaliteten deres. Tilbakemeldingsprosessen er utformet for å være hyppig og 
        strukturert på en måte som oppmuntrer til ærlig og åpen kommunikasjon, slik at ingen aspekter 
        av deres erfaring går ubemerket hen. På denne måten utvikles VR-opplevelsen for å bedre 
        passe deres mentale og fysiske kapasiteter, og muliggjør en løsning som både er engasjerende 
        og fordelaktig.
      </StepDescription>
    </StepCard>

    {/* Trinn 3: Empowerment og Autonomi */}
    <StepCard whileHover={{ scale: 1.1 }}>
      <StepIcon><FaUser /></StepIcon>
      <StepTitle>Empowerment og Autonomi</StepTitle>
      <StepDescription>
        En essensiell komponent i brukerens perspektiv er å sikre at eldre individer føler seg 
        styrket og autonome gjennom hele prosessen. Bruken av VR-teknologi er ikke bare ment å 
        underholde eller distrahere, men å gi meningsfull deltakelse som lar brukerne gjenvinne noe 
        av uavhengigheten de kanskje har følt var tapt. Ved å tilby immersive opplevelser som 
        imøtekommer deres individuelle preferanser—som å besøke kjente steder fra deres fortid eller 
        delta i aktiviteter de pleide å nyte—får brukerne en følelse av kontroll og valg i sin 
        daglige rutine. Dette aspektet av designen bidrar til å bekjempe isolasjon og avhengighet som 
        mange eldre opplever, og fremmer en følelse av egenverd og hensikt.
      </StepDescription>
    </StepCard>

    {/* Trinn 4: Kognitive og Emosjonelle Fordeler */}
    <StepCard whileHover={{ scale: 1.1 }}>
      <StepIcon><FaHandsHelping /></StepIcon>
      <StepTitle>Kognitive og Emosjonelle Fordeler</StepTitle>
      <StepDescription>
        Utover de praktiske og underholdende bruksområdene bringer integreringen av VR i eldreomsorgen 
        betydelige kognitive og emosjonelle fordeler. Mange brukere rapporterer om å føle seg mentalt 
        stimulert når de navigerer i de virtuelle miljøene, som utfordrer deres kognitive evner ved 
        å kreve fokus, hukommelsesgjenvinning og beslutningstaking. Disse øvelsene kan bremse 
        kognitiv nedgang og fremme mental skarphet. Emosjonelt tilbyr VR et trygt rom for eldre brukere 
        å gjenoppleve kjære minner eller til og med samhandle med avatarer av kjære, noe som lindrer 
        følelser av ensomhet og forbedrer humøret. VR muliggjør også en form for flukt som kan redusere 
        stress og angst knyttet til aldring, sykdom eller det å være innesperret i en enkelt beliggenhet 
        i lengre perioder.
      </StepDescription>
    </StepCard>

    {/* Trinn 5: Tilpasning og Personalisering */}
    <StepCard whileHover={{ scale: 1.1 }}>
      <StepIcon><FaUser /></StepIcon>
      <StepTitle>Tilpasning og Personalisering</StepTitle>
      <StepDescription>
        Hver enkelt har forskjellige preferanser, evner og livserfaringer, noe som er grunnen til at 
        personalisering er et kritisk aspekt av VR-opplevelsen fra brukerens perspektiv. I løpet av 
        brukerreisen kan hver eldre deltaker tilpasse sine VR-økter for å passe deres unike smaker og 
        komfortnivåer. Enten det er å justere vanskelighetsgraden av en aktivitet, velge bestemte typer 
        innhold, eller gjenbesøke spesifikke steder fra livet deres, sikrer denne tilpasningen at 
        hver økt forblir meningsfull og engasjerende for brukeren. Slik personaliserte opplevelser 
        fremmer en følelse av eierskap, noe som får de eldre til å føle at teknologien er laget 
        spesielt for dem, i stedet for en løsning som passer alle.
      </StepDescription>
    </StepCard>

    {/* Trinn 6: Brukervennlighet og Tilgjengelighet */}
    <StepCard whileHover={{ scale: 1.1 }}>
      <StepIcon><FaHandsHelping /></StepIcon>
      <StepTitle>Brukervennlighet og Tilgjengelighet</StepTitle>
      <StepDescription>
        Et annet viktig perspektiv fra brukerens side er brukervennligheten og tilgjengeligheten av 
        VR-løsningen. Gitt at mange eldre individer kan ha fysiske eller kognitive begrensninger, er 
        VR-plattformen utformet for å være så intuitiv og brukervennlig som mulig. Store, lettleste 
        tekst, enkle kontroller, og stemmekommandoer er bare noen av tilgjengelighetsfunksjonene som 
        sikrer at teknologien forblir inkluderende for alle. Brukervennlighetstesting utføres regelmessig, 
        med brukere som gir tilbakemelding om navigasjonsenkelhet, visuell klarhet og generell komfort 
        under lengre bruk. Disse innsiktene brukes til å forbedre designet iterativt, noe som gjør det 
        egnet for et bredere spekter av evner og sikrer at ingen bruker føler seg glemt.
      </StepDescription>
    </StepCard>

    {/* Trinn 7: Fellesskapsfølelse og Sosial Interaksjon */}
    <StepCard whileHover={{ scale: 1.1 }}>
      <StepIcon><FaUser /></StepIcon>
      <StepTitle>Fellesskapsfølelse og Sosial Interaksjon</StepTitle>
      <StepDescription>
        En av de mest spennende mulighetene som VR tilbyr eldre brukere er potensialet for sosial 
        interaksjon og fellesskapsbygging. Mange eldre individer opplever sosial isolasjon, spesielt i 
        omsorgsfasiliteter eller når de bor alene. VR kan fungere som en bro, og koble brukere med 
        familiemedlemmer, venner, eller til og med andre eldre individer gjennom delte virtuelle 
        opplevelser. Enten det er å delta på virtuelle familiesammenkomster, besøke fjerne slektninger, 
        eller delta i gruppeaktiviteter med andre eldre brukere, kan fellesskapsfølelsen som 
        fremmes gjennom disse interaksjonene forbedre mental velvære og bekjempe ensomhet. Evnen 
        til å kommunisere og dele opplevelser innenfor et virtuelt rom hjelper eldre brukere å føle 
        seg tilknyttet til verden rundt dem, selv når de er fysisk adskilt.
      </StepDescription>
    </StepCard>

  </ScrollView>
</SectionContainer>

      {/* Deltakers Perspektiv Seksjon */}
      <SectionContainer>
        <SectionTitle>Perspektiv fra Deltakeren</SectionTitle>
        <ScrollView>

          {/* Samarbeid Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaHome /></StepIcon>
            <StepTitle>Samarbeid</StepTitle>
            <StepDescription>
              Pårørende og omsorgspersoner spiller en avgjørende rolle i utviklingen av VR-løsningen ved å samarbeide tett med 
              brukerne og PRIMA-teamet. Deres aktive deltakelse bidrar til en dypere forståelse av både brukernes behov og 
              familiedynamikken som påvirker omsorgen. Gjennom regelmessige møter, diskusjoner og innsiktsfulle tilbakemeldinger, 
              kan pårørende og omsorgspersoner dele sine observasjoner, uttrykke bekymringer og foreslå forbedringer. 
              Dette samarbeidet sikrer at løsningen ikke bare er tilpasset brukerne, men også integreres godt i familiens 
              og omsorgspersonenes daglige rutiner. Ved å involvere de som kjenner brukerne best, skapes en mer holistisk 
              tilnærming til eldreomsorg som tar hensyn til både fysiske, emosjonelle og sosiale aspekter.
            </StepDescription>
          </StepCard>

          {/* Støtte Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaLaptopCode /></StepIcon>
            <StepTitle>Støtte</StepTitle>
            <StepDescription>
              Omsorgspersoner og familiemedlemmer gir viktig emosjonell og teknisk støtte til brukerne under hele 
              prosessen. VR-teknologien kan være ny og utfordrende for mange eldre, så deltakernes rolle som støttespillere 
              er avgjørende for å bygge tillit og trygghet. De hjelper brukerne med å bli komfortable med utstyret, 
              navigere gjennom de virtuelle omgivelsene og oppmuntre til regelmessig bruk. Omsorgspersonene gir også 
              teknisk hjelp ved oppsett og vedlikehold av VR-enhetene, noe som gjør at brukerne kan fokusere på 
              opplevelsen i stedet for å bekymre seg for det tekniske. I tillegg tilbyr de emosjonell støtte, 
              spesielt for brukere som kan føle seg overveldet eller engstelige ved første bruk, og sikrer at 
              VR-opplevelsene forblir positive og styrkende.
            </StepDescription>
          </StepCard>

          {/* Forståelse for Brukerbehov Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaHome /></StepIcon>
            <StepTitle>Forståelse for Brukerbehov</StepTitle>
            <StepDescription>
              Deltakerne fungerer også som bindeledd mellom brukerne og prosjektteamet ved å fremheve spesifikke behov 
              eller utfordringer som brukerne kanskje ikke selv er i stand til å uttrykke fullt ut. Omsorgspersoner og 
              pårørende kjenner ofte til de mer subtile aspektene av brukerens livsstil, preferanser og grenser, og 
              dette hjelper utviklingsteamet med å skape en VR-løsning som er skreddersydd til brukerens kognitive og 
              fysiske kapasitet. Ved å bidra med denne innsikten kan deltakerne sørge for at brukernes unike behov blir 
              ivaretatt gjennom hele design- og implementeringsprosessen, noe som gjør VR-opplevelsen mer personlig og 
              relevant for hver enkelt bruker.
            </StepDescription>
          </StepCard>

          {/* Omsorg og Forbindelse Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaLaptopCode /></StepIcon>
            <StepTitle>Omsorg og Forbindelse</StepTitle>
            <StepDescription>
              Deltakernes perspektiv handler ikke bare om teknisk assistanse, men også om å styrke båndene mellom brukere 
              og deres kjære. VR-teknologien kan brukes til å skape nye måter for brukerne å oppleve nærhet og tilhørighet 
              på, spesielt med familie som bor langt unna. Pårørende kan hjelpe brukerne med å bruke VR for å delta i 
              virtuelle sammenkomster, gjenoppleve familieminner eller til og med utforske felles interesser i en 
              digital verden. Dette styrker familiebåndene og gir en følelse av tilstedeværelse, selv når de ikke kan 
              være fysisk sammen. Ved å legge til rette for slike meningsfulle opplevelser, hjelper deltakerne med å 
              forbedre brukernes sosiale liv og følelsen av fellesskap.
            </StepDescription>
          </StepCard>

          {/* Informasjon og Opplæring Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaHome /></StepIcon>
            <StepTitle>Informasjon og Opplæring</StepTitle>
            <StepDescription>
              Et annet viktig aspekt av deltakernes perspektiv er deres rolle i opplæringen av både brukerne og andre 
              omsorgspersoner om hvordan VR-teknologien best kan brukes. Gjennom opplæringsøkter og demonstrasjoner sørger 
              deltakerne for at alle involverte føler seg komfortable og i stand til å bruke utstyret effektivt. Dette 
              inkluderer ikke bare hvordan VR-enheter fungerer, men også hvordan de kan tilpasses til brukerens 
              preferanser og fysiske evner. Ved å skape en dypere forståelse av teknologiens potensial, hjelper deltakerne 
              med å maksimere nytteverdien av VR-løsningen og sørge for at den blir en integrert del av brukerens hverdag.
            </StepDescription>
          </StepCard>

          {/* Overvåking og Tilbakemelding Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaLaptopCode /></StepIcon>
            <StepTitle>Overvåking og Tilbakemelding</StepTitle>
            <StepDescription>
              Omsorgspersoner og pårørende spiller også en viktig rolle i å overvåke hvordan brukerne reagerer på VR-teknologien 
              over tid. De gir kontinuerlig tilbakemelding til prosjektteamet om eventuelle endringer i brukerens fysiske eller 
              psykiske tilstand, og dette hjelper med å tilpasse og justere VR-opplevelsen etter behov. Gjennom denne overvåkningen 
              kan deltakerne sikre at teknologien ikke bare er engasjerende, men også trygt og effektivt integrert i den daglige 
              omsorgen. Dette gir en mer dynamisk tilnærming til eldreomsorg, der teknologien tilpasses til brukernes utviklende 
              behov, samtidig som de får mest mulig ut av hver VR-opplevelse.
            </StepDescription>
          </StepCard>

        </ScrollView>
      </SectionContainer>

      {/* Sykehusets Perspektiv Seksjon */}
      <SectionContainer>
        <SectionTitle>Perspektiv fra Sykehuset</SectionTitle>
        <ScrollView>

          {/* Implementering Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaHome /></StepIcon>
            <StepTitle>Implementering</StepTitle>
            <StepDescription>
              Integrering av VR-teknologi i sykehuset representerer et stort skritt mot å modernisere eldreomsorgen. 
              Sykehuspersonalet arbeider kontinuerlig med å tilpasse VR-løsningene til de daglige rutinene på institusjonen, 
              noe som inkluderer å utforme tilpassede VR-opplevelser som passer de eldre brukernes behov. Implementeringen 
              starter med opplæring av helsepersonell, slik at de forstår hvordan de skal bruke teknologien på en sikker og 
              effektiv måte. VR-opplevelser blir integrert som en del av behandlingen for å forbedre både den mentale og 
              fysiske helsen til eldre pasienter. Ved å gjøre VR til en del av den daglige omsorgen, opplever sykehuset 
              en forbedring i pasientenes generelle velvære, hvor både personalet og pasientene får nye verktøy til å håndtere 
              stress, angst og ensomhet. Implementeringen inkluderer også tett samarbeid med teknologipartnere for å sikre 
              jevnlige oppdateringer av programvaren, samt tilpasning av innholdet til pasientenes utviklende behov.
            </StepDescription>
          </StepCard>

          {/* Omsorgsstrategi Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaLaptopCode /></StepIcon>
            <StepTitle>Omsorgsstrategi</StepTitle>
            <StepDescription>
              Sykehusets omsorgsstrategi har alltid vært fokusert på å tilby den beste mulige pleien til eldre pasienter, 
              og VR-teknologi har åpnet nye muligheter innen helseinnovasjon. Ved å bruke VR kan sykehuset tilby innovative 
              løsninger som engasjerer pasientene på nye måter, og bidrar til å øke både deres mentale og fysiske velvære. 
              Teknologien gir en mulighet til å skape meningsfulle opplevelser som forbedrer pasientens livskvalitet, for eksempel 
              ved å simulere aktiviteter eller steder som de eldre tidligere likte, men som de nå har begrenset tilgang til på 
              grunn av alder eller sykdom. Dette bidrar til å redusere følelsen av isolasjon og øker motivasjonen til å delta 
              i daglige aktiviteter. Omsorgsstrategien fokuserer også på å bruke VR som en del av rehabilitering, hvor pasientene 
              kan utføre øvelser og fysioterapi i virtuelle miljøer, noe som gjør det lettere å oppnå mål for bedring. Ved å 
              integrere denne teknologien, forbedrer sykehuset sin helhetlige tilnærming til eldreomsorg, og utvider rekkevidden 
              til hva som kan tilbys innenfor helseinstitusjoner.
            </StepDescription>
          </StepCard>

          {/* Pasientengasjement Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaHome /></StepIcon>
            <StepTitle>Pasientengasjement</StepTitle>
            <StepDescription>
              En viktig del av sykehusets perspektiv på bruk av VR er å øke pasientengasjementet. Mange eldre pasienter sliter med 
              å holde seg mentalt og fysisk aktive under lange opphold på sykehuset. VR tilbyr en ny måte for pasientene å engasjere 
              seg i meningsfulle aktiviteter, fra virtuelle turer til interaktive spill som fremmer sosial interaksjon. Ved å 
              tilby disse opplevelsene, kan sykehuset hjelpe pasientene med å opprettholde et høyere nivå av engasjement og 
              stimulering, noe som kan være gunstig for både kognitiv funksjon og følelsesmessig velvære. Gjennom tilbakemeldinger 
              fra både pasienter og ansatte, tilpasses VR-opplevelsene slik at de er mest mulig relevante og interessante for 
              de eldre pasientene. Dette øker sannsynligheten for at VR blir en varig del av sykehusets omsorgsstrategi, 
              og bidrar til en mer positiv sykehusopplevelse for de eldre.
            </StepDescription>
          </StepCard>

          {/* Opplæring av Personell Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaLaptopCode /></StepIcon>
            <StepTitle>Opplæring av Personell</StepTitle>
            <StepDescription>
              En viktig del av sykehusets implementering av VR-teknologi er opplæring av helsepersonell. For at VR-opplevelsene 
              skal integreres effektivt i sykehusets omsorgsstrategi, må personalet være komfortable med både den tekniske 
              og terapeutiske bruken av teknologien. Sykehuset organiserer regelmessige opplæringsprogrammer der ansatte lærer 
              hvordan de kan bruke VR-enhetene, tilpasse opplevelsene til pasientenes individuelle behov, og hvordan de kan 
              overvåke pasientenes respons på VR-behandlingen. Dette sikrer at personalet ikke bare ser VR som et fremmed element, 
              men som et verktøy de aktivt kan bruke for å forbedre pasientenes livskvalitet. Opplæringen bidrar også til å 
              skape en kultur for innovasjon, hvor personalet føler seg bemyndiget til å utforske nye måter å forbedre omsorgen på.
            </StepDescription>
          </StepCard>

          {/* Evaluering og Tilbakemelding Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaHome /></StepIcon>
            <StepTitle>Evaluering og Tilbakemelding</StepTitle>
            <StepDescription>
              Etter implementeringen av VR-løsningen er det viktig at sykehuset kontinuerlig evaluerer effekten av teknologien på 
              pasientenes velvære. Sykehuset overvåker nøye pasientenes respons på VR-opplevelsene, både når det gjelder fysiske 
              og emosjonelle forbedringer. Denne tilbakemeldingen brukes til å justere og forbedre VR-programmene, slik at de 
              blir enda mer effektive over tid. Evalueringen omfatter også hvordan VR påvirker sykehusets rutiner, og om det er 
              områder hvor teknologien kan integreres enda bedre. Sykehuset samarbeider tett med utviklingsteamet bak VR-løsningen 
              for å sikre at alle tilbakemeldinger blir tatt med i betraktning ved fremtidige oppdateringer av teknologien. Denne 
              dynamiske tilnærmingen gjør det mulig for sykehuset å tilpasse seg de stadig skiftende behovene til både pasientene 
              og personalet.
            </StepDescription>
          </StepCard>

        </ScrollView>
      </SectionContainer>

      {/* Bærum Kommunes Perspektiv Seksjon */}
      <SectionContainer>
        <SectionTitle>Perspektiv fra Bærum Kommune</SectionTitle>
        <ScrollView>

          {/* Innovasjon Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaCity /></StepIcon>
            <StepTitle>Innovasjon</StepTitle>
            <StepDescription>
              Bærum Kommune har lenge vært en forkjemper for innovasjon, spesielt innen offentlig tjenestedesign og bruken 
              av digitale verktøy for å forbedre velferdstjenestene. Kommunen har som mål å sikre at teknologien er en integrert 
              del av omsorgsstrategien for eldre, og VR-teknologi er et av de nyeste tiltakene for å oppnå dette. 
              Gjennom en grundig tilnærming til tjenestedesign, utforsker Bærum Kommune hvordan VR kan bidra til å 
              løse utfordringene med eldreomsorg, som isolasjon, mental stimulering og fysisk rehabilitering. Innovasjon 
              handler ikke bare om å introdusere ny teknologi, men om å skape løsninger som forbedrer innbyggernes livskvalitet 
              og helse. Bærum Kommune legger stor vekt på brukerorientert design, der de eldre selv er med på å påvirke 
              hvordan VR-opplevelsene utformes og tilpasses deres spesifikke behov. Denne tilnærmingen sikrer at teknologien 
              ikke bare er et teknologisk verktøy, men en funksjonell løsning som er relevant i dagliglivet til brukerne.
            </StepDescription>
          </StepCard>

          {/* Samarbeid Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaLaptopCode /></StepIcon>
            <StepTitle>Samarbeid</StepTitle>
            <StepDescription>
              For å sikre at implementeringen av VR-teknologi i eldreomsorgen blir vellykket, har Bærum Kommune inngått et 
              strategisk partnerskap med Studio 51. Dette samarbeidet bygger på en felles visjon om å forbedre helsetjenestene 
              ved å bruke teknologi på nye og innovative måter. Sammen arbeider kommunen og Studio 51 med å utvikle og teste 
              skreddersydde VR-opplevelser som kan forbedre både den mentale og fysiske helsen til eldre innbyggere. 
              Studio 51 bringer med seg teknologisk ekspertise og kreativt innhold, mens Bærum Kommune tilfører innsikt i 
              brukerens behov, spesielt innen eldreomsorg. Gjennom felles workshops, pilotprosjekter og tilbakemeldinger 
              fra både brukere og ansatte, kan dette samarbeidet kontinuerlig forbedre tjenestene. Bærum Kommune ser på 
              dette partnerskapet som et viktig steg mot å bli en ledende aktør innen digitalisering av offentlige tjenester, 
              og samarbeidet med private aktører som Studio 51 gir dem muligheten til å akselerere denne utviklingen.
            </StepDescription>
          </StepCard>

          {/* Digital Transformasjon Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaCity /></StepIcon>
            <StepTitle>Digital Transformasjon</StepTitle>
            <StepDescription>
              Bærum Kommune har som en del av sin langsiktige strategi å fremme digital transformasjon på tvers av alle 
              sine tjenester. Innen eldreomsorg er målet å bruke teknologiske løsninger som VR for å forbedre kvaliteten 
              på tjenestene, samtidig som de gjør dem mer tilgjengelige og effektive. VR gir ikke bare nye muligheter for 
              rehabilitering og mental stimulering, men kan også bidra til å redusere presset på sykehjem og helsepersonell 
              ved å gi de eldre verktøy for selvhjelp og selvstendig utforskning. Kommunen har investert i infrastruktur 
              som muliggjør denne teknologien, og de samarbeider også med lokale helseinstitusjoner for å sikre en smidig 
              overgang fra tradisjonelle tjenester til mer teknologisk avanserte løsninger. Denne transformasjonen er en del 
              av Bærum Kommunes visjon om å være en fremtidsrettet kommune som setter innbyggernes behov i sentrum, og der 
              digital innovasjon er nøkkelen til å møte fremtidens utfordringer innen helse og omsorg.
            </StepDescription>
          </StepCard>

          {/* Brukerinvolvering Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaLaptopCode /></StepIcon>
            <StepTitle>Brukerinvolvering</StepTitle>
            <StepDescription>
              I tråd med Bærum Kommunes fokus på brukerorientert tjenesteutvikling, spiller brukerinvolvering en sentral 
              rolle i utviklingen og implementeringen av VR-teknologien. Kommunen sørger for at de eldre, deres pårørende 
              og omsorgspersoner er tett involvert i alle stadier av prosjektet. Gjennom workshops, spørreundersøkelser og 
              samtaler med de eldre selv, kan kommunen få innsikt i hvordan VR-opplevelsene kan tilpasses for å møte de 
              eldres spesifikke behov og ønsker. Denne tilnærmingen sikrer at de teknologiske løsningene ikke er 
              generaliserte, men derimot skreddersydd for hver enkelt bruker. Ved å involvere brukerne aktivt i prosessen, 
              styrker kommunen også deres følelse av eierskap og engasjement i den teknologiske utviklingen. Dette bidrar 
              til en mer bærekraftig implementering, hvor teknologien blir godt mottatt og brukt i det daglige av de som 
              har størst nytte av den.
            </StepDescription>
          </StepCard>

          {/* Bærekraftig Utvikling Step */}
          <StepCard whileHover={{ scale: 1.1 }}>
            <StepIcon><FaCity /></StepIcon>
            <StepTitle>Bærekraftig Utvikling</StepTitle>
            <StepDescription>
              Bærum Kommune har også et sterkt fokus på bærekraftig utvikling, både når det gjelder økonomi og miljø, 
              samt sosial bærekraft. VR-teknologi representerer en investering i fremtiden, der kostnadseffektive og 
              innovative løsninger kan bidra til å redusere behovet for tradisjonelle ressurstunge tjenester. Ved å 
              bruke VR til rehabilitering, sosialt samvær og underholdning, kan kommunen potensielt redusere belastningen 
              på helse- og omsorgssystemet. I tillegg gir teknologien miljømessige fordeler, for eksempel ved å redusere 
              behovet for transport for eldre som ellers ville måtte reise til spesifikke aktiviteter eller rehabiliteringsøkter. 
              Bærum Kommune ser på teknologien som et middel for å nå sine mål om en mer bærekraftig fremtid, der innbyggerne 
              får tilgang til bedre tjenester samtidig som kommunen forvalter ressursene på en ansvarlig måte.
            </StepDescription>
          </StepCard>

        </ScrollView>
      </SectionContainer>

    </JourneyContainer>
  );
};

export default UserJourney;