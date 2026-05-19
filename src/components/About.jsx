import { Element } from 'react-scroll'
import '../css/style.css'
import Text from '../components/Text.jsx'
import Func from '../components/About/Func.jsx'
const braces = ['{', '}', '[', ']', '(', ')'];


const Skills = () => {

  const About = {
    Myself: [
      {
        val1: 'class'
      },
      {
        val2: "'Gaurav kandhalia"
      }, {
        val3: "( ) {"
      }, {
        this: 'this',
        dot: '.',
        att: 'name',
        eq: '=',
        val: " 'Gaurav kandhalia'"
      },
      {
        this: 'this',
        dot: '.',
        att: 'email',
        eq: '=',
        val: "'gauravkandhalia@gmail.com'"
      },
      {
        this: 'this',
        dot: '.',
        att: 'github',
        eq: '=',
        val: "'https://github.com/gaurav-kandhalia'",
        link: 'https://github.com/gaurav-kandhalia'
      },
      {
        this: 'this',
        dot: '.',
        att: 'leetcode',
        eq: '=',
        val: "'https://leetcode.com/u/Gauravkandhalia/'",
        link: 'https://leetcode.com/u/Gauravkandhalia/'
      }

    ],
    Experience: [
      
      {
        role: 'Web Developer',
        company: 'Wayne E Solutions',
        location: 'Ludhiana',
        period: '2025 Nov - Present',
        details: 'Improving frontend interactions and code quality across projects.',
      },
      {
        role: 'Web Developer',
        company: 'Kreativan Technologies',
        location: 'IT Park, Chandigarh',
        period: '2024 Feb - 2025 Apr',
        details: 'Built portfolio and feature pages using React and responsive design.',
      },
      {
        role: 'Node.js Intern',
        company: 'O7 Services',
        location: 'Jalandhar',
        period: '2024',
        details: 'Worked on backend services and REST API integration.',
      },
      {
        role: 'Frontend Intern',
        company: 'O7 Services',
        location: 'jalandhar',
        period: '2023',
        details: 'Built frontend experiences with HTML, CSS, JavaScript, and PHP.',
      }

    ],
    Skills: [
      {
        frontend: {
          val: 'HTML , css , React Js, next js, material Ui , chakra ui,framer-motion  '
        }
      },
      {
        backend: {
          val: 'Node js, express , mongodb'
        }
      },
      {
        languages: {
          val: 'C,C++(DSA + OOPS)'
        }
      },
      {
        additional: {
          val: 'github'
        }
      },
      {
        val4: ' ] }'
      }
    ],
    Education: [
      {
        val4: '{ 2020 - 2024 : B Tech in Computer Science and Engineering (DAV university,Jalandhar)}',

      }
      , {
        val4: '{ 2020  : +2 Non-Medical (Trinity College , Jalandhar)}',
      },

    ]

  }

  const skills = [
    {
      frontend: {
        val: 'HTML , css , React Js, next js, material Ui , chakra ui,framer-motion  ',
        end: ' ] }'
      }
    },
    {
      backend: {
        val: 'Node js, express , mongodb',
        end: ' ] }'
      }
    },
    {
      languages: {
        val: 'C,C++(DSA + OOPS)',
        end: ' ] }'
      }
    },
    {
      additional: {
        val: 'github',
        end: ' ] }'
      }
    },

  ]






  return (<>
    <div className='  sm:text-xl text-base  text-white pb-10'>
      <div className='flex gap-4'>

        <Text classname={'text-customPurple'} text={'class'} />
        <div className='flex'>

          <Text classname={'text-[#eeff31] text-nowrap'} text={'Gaurav Kandhalia'} />

          <Text classname={'text-[#eeff31]'} text={braces[0]} />
        </div>
      </div>
      <div className='ml-4 flex'>

        <Text classname={'text-customPurple'} text={'constructor'} />

        <Text classname={'text-white'} text={`${braces[4]} ${braces[5]}`} />
        <Text classname={'text-white'} text={braces[0]} />

      </div>

      <div className='ml-4'>
        {
          About.Myself.map((val, index) => {
           

            return (<>
              <div className='flex ' key={`myself-${index}`}>
              
                <span className='text-[#e3244c]'>{val.this}{val.dot}</span>

                <Text text={val.att} />
                <Text classname={'text-[#e3244c]'} text={val.eq} />

                {val.link ? (
                  <a
                    href={val.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#24e33a] underline decoration-[#24e33a] hover:text-[#87f0ff]"
                  >
                    {val.val}
                  </a>
                ) : (
                  <Text classname={'text-[#24e33a]'} text={val.val} />
                )}

              </div>
            </>)
          })
        }
      </div>

      <Element name='experience'>
        <div className='ml-4 mt-4'>
          <Func val={"Experience"} brace={"( ) {"} />
        </div>
        <div className='ml-10'>
          {About.Experience.map((item, index) => (
          <div key={`experience-${index}`} className='text-[#24e33a] ml-6 mt-3'>
            <div className='flex flex-wrap gap-2'>
              <Text classname={'text-[#eeff31]'} text={item.period} />
              <Text classname={'text-white'} text={'//'} />
              <Text classname={'text-[#e3b341]'} text={`${item.role} at`} />
              <Text classname={'text-[#24e33a]'} text={item.company} />
              <Text classname={'text-[#7dd3fc]'} text={`(${item.location})`} />
            </div>
            <div className='ml-4 mt-1'>
              <Text classname={'text-[#cbd5e1]'} text={item.details} />
            </div>
          </div>
        ))}
      </div>
      </Element>
      <Text divClassname={'ml-10'} text={braces[3]} />


      <div className='ml-4 mt-4'>
        <Func val={"Education"} brace={"( ) {"} />
      </div>
      <div>
  {About.Education.map((val, index) => (
    <Text
      key={`education-${index}`}
      divClassname="text-[#24e33a] ml-10"
      text={val.val4}
    />
  ))}
</div>


      <Text divClassname={'ml-10'} text={braces[3]} />

      <div className='ml-4 mt-4 '>
        <Func val={"Skills"} brace={"( ) {"} />
        <div className='pl-4'>

        </div>

      </div>
      <div className=''>
  {skills.map((skill,index) => {
    const key = Object.keys(skill)[0]; // Unique key from object property
    return (
      <div key={`skills-${index}`} className='text-[#24e33a] ml-16 mt-4'>
        <Func val={key} brace={"( ) {"} />
        <Text divClassname={'pl-10'} text={skill[key].val} />
        <Text divClassname={' text-white pl-4 mt-2'} text={skill[key].end} />
      </div>
    );
  })}
</div>


      <Text divClassname={'ml-10'} text={braces[3]} />
    </div>



  </>)
}

export default Skills;

