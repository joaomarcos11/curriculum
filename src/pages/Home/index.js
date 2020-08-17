import React from 'react';

import ButtonLink from '../../components/ButtonLink';
import ButtonTab from '../../components/ButtonTab';
import PersonalData from '../../components/PersonalData';

import personImg from '../../assets/image/joaomarcos.jpg';
import home from '../../assets/image/icons/home.svg';
import city from '../../assets/image/icons/city-location.svg';
import email from '../../assets/image/icons/email.svg';
import phone from '../../assets/image/icons/phone.svg';
import linkedin from '../../assets/image/icons/linkedin.svg';
import github from '../../assets/image/icons/github.svg';
import experience from '../../assets/image/icons/suitcase.svg';
import graduation from '../../assets/image/icons/graduation.svg';
import skills from '../../assets/image/icons/tools.svg';
import portfolio from '../../assets/image/icons/folder.svg';
import certification from '../../assets/image/icons/certification.svg';

import './styles.css';

function Home() {
  return (
    <div className="container">

      <header>
        <div className="header-principal">

          <div className="person">
            <img src={personImg} alt="João Marcos" />
            <h1>
              João Marcos <br/> 
              Lucena Fonseca
            </h1>
          </div>

          <div className="person-info">
            <div className="primary-info">
              <PersonalData 
                information='Av. Pombal, 610, 58038-241'
                iconLink={home}
                iconName='Endereço'
                />
              <PersonalData 
                information='João Pessoa-PB'
                iconLink={city}
                iconName='Cidade'
                />
              <PersonalData 
                information='joaomarcos11.tech@gmail.com'
                iconLink={email}
                iconName='Email'
                />
              <PersonalData
                information='(83) 9 9972-0672'
                iconLink={phone}
                iconName='Celular'
                />
            </div>
            <div className="secondary-info">
              <ButtonLink 
                iconLink={linkedin}
                iconName='Linkedin'
                description='LinkedIn'
              />
              <ButtonLink 
                iconLink={github}
                iconName='Github'
                description='GitHub'
              />
            </div>
          </div>
        </div>
      </header>

      <nav> 
        <div className="home-nav">
          <ButtonTab
            iconLink={home}
            iconName='Home'
            description='Home'
            />
          <ButtonTab
            iconLink={experience}
            iconName='Experiência profissional'
            description='Experiência'
            />
          <ButtonTab
            iconLink={graduation}
            iconName='Formação acadêmica'
            description='Formação'
            />
          <ButtonTab
            iconLink={skills}
            iconName='Habilidades'
            description='Habilidades'
            />
          <ButtonTab
            iconLink={portfolio}
            iconName='Portfólio'
            description='Portfólio'
            />
          <ButtonTab
            iconLink={certification}
            iconName='Certificação'
            description='Certificação'
            />
        </div>
      </nav>

      <div className="home-goal">
        <p>
        Busco oportunidades para aprimorar minhas capacidades e conhecimentos em linguagens de programação, em ferramentas e técnicas relacionadas ao desenvolvimento de tecnologias e análise de dados e sistemas.
        </p>
      </div>

      <footer>
        <p>
          Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default Home;