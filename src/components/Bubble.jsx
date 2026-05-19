import '../css/style.css'

const Bubble = ({ left = '50%', size = '3rem', duration = 10, delay = 0 }) => {
    return (<>
    <div
      className="circle rounded-full"
      style={{
        left,
        width: size,
        height: size,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    />
    </>)
}

export default Bubble