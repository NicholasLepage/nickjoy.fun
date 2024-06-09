import Header from '../components/Header'

const Maniaquarium = () => {
    return (
        <>
            <Header />
            <div>
                <h1 className='main-title font-black font drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] pb-10'>Maniaquarium</h1>
                <iframe src="https://itch.io/embed-upload/10633043?color=333333" width="1280" height="740"></iframe>
                
                <p className='pt-5'>Game not loading? Play in a new tab:</p>
                <a href="https://itch.io/embed-upload/10633043?color=333333" target='_blank'>Play In Browser</a>

                {/* <div className='flex items-center justify-center'>
                    <iframe className='center' frameborder="0" src="https://itch.io/embed/2761037" width="552" height="167"><a href="https://nickjoy.itch.io/maniaquarium-web">Maniaquarium Web by Nick Joy</a></iframe>
                </div> */}
            </div>
            <p className="read-the-docs">Maniaquarium 1.2 - Godot Version</p>
        </>
    )
}

export default Maniaquarium