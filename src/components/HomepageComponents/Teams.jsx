import team_img1 from "../../assets/team_img1.png";
import team_img2 from "../../assets/team_img2.png";
import team_img3 from "../../assets/team_img3.png"; 
import team_img4 from "../../assets/team_img4.png";
import team_img5 from "../../assets/team_img5.png";
import team_img6 from "../../assets/team_img6.png";   
import team_icon from "../../assets/team_icon.png";
import Button from "../Button";


function TeamCards () {
 const teamcardsItems = [
  {
    name: "John Doe",
    img: team_img1,
    position: "CEO and Founder",
    experience: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    name: "Jane Doe",
    img: team_img2,
    position: "Director Of Operations",
    experience: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    name: "Michael Brown",
    img: team_img3,
    position: "Senior SEO Specialist",
    experience: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  
 },
  {
     name: "Emily Clark",
     img: team_img4,
    position: "PPC Manager",
    experience: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  
  },
  {
     name: "Brian Willaims",
    img: team_img5,
    position: "Social Media Specilist",
    experience: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  
  },
  {
    name: "Sarah Johnson",
    img: team_img6,
    position: "Content Creator",
    experience: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
},
];

  return (
    
    <div data-aos="fade-right" className="grid gap-6 lg:gap-8 grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {teamcardsItems.map((t, i) => (
        <div  key={i} className=" hover:scale-105 relative p-4 border rounded-[20px] shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
        <img
        className="w-20 h-20 object-contain"
        src={t.img}
        alt="team-images"
        />
  
      <div className="ml-4">
      <h3 className="text-xl font-semibold">{t.name}</h3>
      <p className="text-md font-medium">{t.position}</p>
     </div>

     {/* THIS pushes icon to extreme right */}
     <a href="#" className="ml-auto absolute top-4 right-4">
      <img className="w-6 h-6 " src={team_icon} alt="icon" />
       </a>
      </div>

        <span class="block w-full h-[0.5px] bg-brand-dark mb-5"></span>

          
          <p className="text-gray-600 text-center ">{t.experience}</p>
        </div>


      ))}

   
    </div>
    
  );
}

 function Team () {
   return (  
    <section className="w-full mt-5 py-12 px-6 ">
      {/* Header */}
      <div data-aos="fade-right" className="flex mb-5 flex-row max-lg:flex-col max-lg:items-center 
       max-lg:justify-center max-lg:text-center">
        <div>
          <h2 className="mb-8 bg-brand-green text-3xl font-bold text-start max-md:text-center">
            Team
          </h2>
        </div>
        <div>
          <p className="ml-10 mt-1.5 max-lg:mx-0 max-lg:mb-10 max-xl:mt-0">
           Meet the skilled and experienced team behind our successful digital marketing strategies
          </p>
        </div>
      </div>
      <TeamCards/>
        <div  className=" mt-10 flex lg:justify-end justify-center">
        <Button className=""
        text="Join Our Team" 
        href="/careers" />
      </div>
    </section>
  );
}


export default Team;
