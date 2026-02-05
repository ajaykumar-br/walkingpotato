import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import MenuCard from "@/components/MenuCard";
import Footer from "@/components/Footer";

const streetSnacks = [
  {imgSrc: '', title: 'Pani Puri', description: 'Crispy puris filled with spiced potato, chickpeas, and flavored water.'},
  {imgSrc: '', title: 'Sev Puri', description: 'Crispy puris topped with potatoes, onions, chutneys and sev.'},
  {imgSrc: '', title: 'Dahi Puri', description: 'Crispy puris filled and topped with yogurt, sweet and spicy chutneys, and sev.'},
  {imgSrc: '', title: 'Masala Puri', description: 'Crushed puris mixed with a thick, spicy gravy, topped with onions and sev.'},
  {imgSrc: '', title: 'Bhel Puri', description: 'A savoury mixture of puffed rice, veggies, and tangy tamarind sauce.'}
];

const deepFriedSnacks = [
  {imgSrc: '', title: 'Mirchi Bajji (Plain, Cut, Stuffed)', description: 'Green chilli peppers coated in a spiced chickpea flour batter and fried.'},
  {imgSrc: '', title: 'Egg Bajji', description: 'Boiled Eggs sliced and dipped in a spiced batter, then fried to perfection.'},
  {imgSrc: '', title: 'Stuffed Capsicum Bajji', description: 'Bell peppers stuffed with a spicy potato filling, coated in batter and fried.'}
];

const puffs = [
  {imgSrc: '', title: 'Veg Puff', description: 'Flaky pastry filled with a savory vegetable mixture.'},
  {imgSrc: '', title: 'Egg Puff', description: 'Flaky pastry filled with spiced boiled egg.'},
  {imgSrc: '', title: 'Chicken Puff', description: 'Flaky pastry filled with a spiced chicken mixture.'},
  {imgSrc: '', title: 'Dilpasand', description: 'Crispy, golden puff pastry filled with a sweet mix of coconut, cherries, and tutti-frutti.'}
];

const steamedAndSpiced = [
  {imgSrc: '', title:'Momos (Chicken/Veg)', description: 'Steamed dumplings filled with spiced chicken or vegetables, served with a tangy dipping sauce.'},
  {imgSrc: '', title:'Onion Samosa', description: 'Triangular pastry filled with a spiced onion mixture, deep-fried to a golden brown.'},
  {imgSrc: '', title:'Cheesy Corn Samosa', description: 'Triangular pastry filled with a savoury mixture of corn and cheese, deep-fried to perfection.'},
  {imgSrc: '', title:'Crunchy Boti Masala', description: 'Crispy, hollow snack pipes dusted with a spicy masala blend.'}
];

const houseSpecials = [
  {imgSrc: '', title:'Tiny Tiny Burgers', description: 'Smaller, slider-style burgers with various fillings.'},
  {imgSrc: '', title:'UFO Burgers', description: 'Uniquely shaped burgers with special fillings and sauces.'},
  {imgSrc: '', title:'Long Fries', description: 'Extra-long cut, crispy potato fries.'},
  {imgSrc: '', title:'Maska Bun', description: 'Soft sweet bun generously spread with butter.'}
];

const quickBites = [
  {imgSrc: '', title:'Masala Corn', description: 'Sweet corn kernels tossed with butter, spices, and lemon juice.'},
  {imgSrc: '', title:'Potato Twisters (Regular/Salted/Peri-peri)', description: 'Crispy, spiral-cut potato on a stick, seasoned with various flavors.'}
];

const beverages = [
  {imgSrc: '', title:'Tea/Coffee', description: 'Chai:Spiced Indian tea brewed with milk and sugar. Coffee:Strong, aromatic Indian filter coffee served hot.'},
  {imgSrc: '', title:'Falooda', description: 'Layered chilled dessert drink with vermicelli, rose syrup, chia seeds, nuts and ice cream.'},
  {imgSrc: '', title:'Mango Lassi', description: 'Creamy mango-flavoured yogurt drink.'},
  {imgSrc: '', title:'Soft Drinks', description: 'Coca-cola, Pepsi, Fanta, Sprite, Dr. Pepper, etc.'}
];

export default function Menu() {
    return (
      <div className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <div className="pt-12 pb-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-6xl font-bold text-gray-900 mb-4">
              Our Menu
            </h1>
            <p className="text-3xl text-gray-600 max-w-2xl mx-auto">
              Discover authentic Indian street food and delicious snacks made fresh daily
            </p>
            <div className="mt-6 h-1 w-24 bg-linear-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Menu Accordion */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
            
            <AccordionItem value="item-1" className="border rounded-lg shadow-sm bg-amber-200 overflow-hidden">
              <AccordionTrigger className="text-2xl md:text-3xl font-semibold px-6 py-4 hover:bg-lime-300 hover:no-underline transition-colors">
                🥘 Street Snacks
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {streetSnacks.map((menuItem, index) => (
                    <MenuCard 
                      key={index}
                      imgSrc={menuItem.imgSrc}
                      title={menuItem.title}
                      description={menuItem.description}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg shadow-sm bg-amber-200 overflow-hidden">
              <AccordionTrigger className="text-2xl md:text-3xl font-semibold px-6 py-4 hover:bg-lime-300 hover:no-underline transition-colors">
                🍤 Savory Deep Fried Delights
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {deepFriedSnacks.map((menuItem, index) => (
                    <MenuCard 
                      key={index}
                      imgSrc={menuItem.imgSrc}
                      title={menuItem.title}
                      description={menuItem.description}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg shadow-sm bg-amber-200 overflow-hidden">
              <AccordionTrigger className="text-2xl md:text-3xl font-semibold px-6 py-4 hover:bg-lime-300 hover:no-underline transition-colors">
                🥐 Puffs and Baked Snacks
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {puffs.map((menuItem, index) => (
                    <MenuCard 
                      key={index}
                      imgSrc={menuItem.imgSrc}
                      title={menuItem.title}
                      description={menuItem.description}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg shadow-sm bg-amber-200 overflow-hidden">
              <AccordionTrigger className="text-2xl md:text-3xl font-semibold px-6 py-4 hover:bg-lime-300 hover:no-underline transition-colors">
                🥟 Steamed and Spiced
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {steamedAndSpiced.map((menuItem, index) => (
                    <MenuCard 
                      key={index}
                      imgSrc={menuItem.imgSrc}
                      title={menuItem.title}
                      description={menuItem.description}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg shadow-sm bg-amber-200 overflow-hidden">
              <AccordionTrigger className="text-2xl md:text-3xl font-semibold px-6 py-4 hover:bg-lime-300 hover:no-underline transition-colors">
                ⭐ House Specials
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {houseSpecials.map((menuItem, index) => (
                    <MenuCard 
                      key={index}
                      imgSrc={menuItem.imgSrc}
                      title={menuItem.title}
                      description={menuItem.description}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg shadow-sm bg-amber-200 overflow-hidden">
              <AccordionTrigger className="text-2xl md:text-3xl font-semibold px-6 py-4 hover:bg-lime-300 hover:no-underline transition-colors">
                🌽 Quick Bites and Specialties
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {quickBites.map((menuItem, index) => (
                    <MenuCard 
                      key={index}
                      imgSrc={menuItem.imgSrc}
                      title={menuItem.title}
                      description={menuItem.description}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg shadow-sm bg-amber-200 overflow-hidden">
              <AccordionTrigger className="text-2xl md:text-3xl font-semibold px-6 py-4 hover:bg-lime-300 hover:no-underline transition-colors">
                🥤 Beverages and Refreshers
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {beverages.map((menuItem, index) => (
                    <MenuCard 
                      key={index}
                      imgSrc={menuItem.imgSrc}
                      title={menuItem.title}
                      description={menuItem.description}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    );
  }