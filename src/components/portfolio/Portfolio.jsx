import React from 'react'
import "./portfolio.css";
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Sortify',
    github: 'https://github.com/groushan/Sortify',
     demo: 'https://sortify-jade-tau.vercel.app/'
  },
   {
    id: 2,
    image: IMG2,
    title: 'SecretSafeguard',
    github: 'https://github.com/groushan/SecretSafeguard',
    demo: 'https://secretsafeguard.onrender.com/'
  },
    {
    id: 3,
    image: IMG3,
    title: 'Goal Tracker',
    github: 'https://github.com/groushan/Goal-Tracker',
    demo: 'https://groushan.github.io/Goal-Tracker/'
  },
     {
    id: 4,
    image: IMG4,
    title: 'Movers n Packers Frontend',
    github: 'https://github.com/groushan/MnP',
    demo: 'https://groushan.github.io/MnP/'
  },
      {
    id: 5,
    image: IMG5,
    title: 'CV using HTML',
    github: 'https://github.com/groushan/CV',
    demo: 'https://groushan.github.io/CV/'
  },
       {
    id: 6,
    image: IMG6,
    title: 'Dice Game',
    github: 'https://github.com/groushan/Dice-Game',
    demo: ''
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-imgae">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
    </section>
  )
}

export default Portfolio