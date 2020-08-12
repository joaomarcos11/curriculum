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
          <div className="header-img">
            <img src={personImg} alt="João Marcos" />
          </div>
          <div className="header-title">
            <h1>João Marcos Lucena Fonseca</h1>
          </div>
        </div>

        <div className="header-personInfo">
          <PersonalData 
            description='Av. Pombal, 610, 58038-241'
            iconLink={home}
            iconName='Endereço'
          />
          <PersonalData 
            description='João Pessoa-PB'
            iconLink={city}
            iconName='Cidade'
          />
          <PersonalData 
            description='joaomarcos11.tech@gmail.com'
            iconLink={email}
            iconName='Email'
          />
          <PersonalData
            description='(83) 9 9972-0672'
            iconLink={phone}
            iconName='Celular'
          />
        </div>

        <div className="header-buttons">
          <ButtonLink 
            iconLink={linkedin}
            iconName='Linkedin'
          />
          <ButtonLink 
            iconLink={github}
            iconName='Github'
          />
        </div>
      </header>

      <nav> 
        <div className="home-nav">
          <ButtonTab
            iconLink={home}
            iconName='Experiência profissional'
            description='Experiência profissional'
            />
          <ButtonTab
            iconLink={experience}
            iconName='Experiência profissional'
            description='Experiência profissional'
            />
          <ButtonTab
            iconLink={graduation}
            iconName='Formação acadêmica'
            description='Formação acadêmica'
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