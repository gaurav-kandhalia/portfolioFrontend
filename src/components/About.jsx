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
        val: "'gaurav@gmail.com'"
      },
      {
        this: 'this',
        dot: '.',
        att: 'github',
        eq: '=',
        val: "'https://github.com/gaurav-kandhalia' "
      }

    ],
    Experience: [

      {
        val4: "{ 2024 - Now :  Web developer at Kreativan Technology}"
      }, {
        val4: "{2024 : Completed my internship in (Node js) at O7 services }"
      },
      {
        val4: "{2023 : completed my internship in frontend ( html,css,js, php) at O7 services} "
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

                <Text classname={'text-[#24e33a]'} text={val.val} />

              </div>
            </>)
          })
        }
      </div>

      <div className='ml-4 mt-4'>
        <Func val={"Experience"} brace={"( ) {"} />
      </div>
      <div>
        {
          About.Experience.map((val, index) => {
            return (<>
              <Text classname={'text-[#24e33a] ml-16'} text={val.val4} key={`experience-${index}`} />

            </>)
          })
        }
      </div>
      {/* <div className='ml-10'><span>{braces[3]}</span></div> */}
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

