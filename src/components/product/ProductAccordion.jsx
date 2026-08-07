import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ProductAccordion({ product }) {
  const [openSection, setOpenSection] = useState("description");

  const sections = [
    {
      id: "description",
      title: "Description",
      content: product.description,
    },
    {
      id: "material",
      title: "Material & Care",
      content: product.material,
    },
    {
      id: "shipping",
      title: "Shipping",
      content: product.shipping,
    },
    {
      id: "returns",
      title: "Returns",
      content: product.returns,
    },
  ];

  const toggleSection = (id) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mt-10 border-t border-white/20">

      {sections.map((section) => {

        const isOpen = openSection === section.id;

        return (
          <div
            key={section.id}
            className="border-b border-white/20"
          >
            <button
              onClick={() => toggleSection(section.id)}
              className="
                w-full
                flex
                items-center
                justify-between
                py-5
                uppercase
                tracking-wider
                text-left
              "
            >
              <span>{section.title}</span>

              {isOpen ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>

            {isOpen && (
              <div className="pb-5 text-white/70 leading-7">
                {section.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}