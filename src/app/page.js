import Feed from '@/components/Feed';
import './globals.css';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>Discover and share

        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>AI-Powered Promts</span>
      </h1>
      <p className='desc text-cnete'>
        Promptopia is an open-source AI prompting tool for  modern world
        to Discover, create and share creative prompts
      </p>
      {/* feed */}
      <Feed />
    </section>
  )
}

export default Home