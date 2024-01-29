import { Label, Button } from "flowbite-react";
import Select from "react-select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sb7anlah from "../components/sb7anlah";
export default function Form() {
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [khssiym, setKhssiym] = useState("");
  const [showSb7anlah, setShowSb7anLah] = useState(false);
  const countryOptions = [
    {
      value: "angola",
      label: "Angola",
      image: "/caf-2023-t9wass/countries/angola.png",
    },
    {
      value: "namibia",
      label: "Namibia",
      image: "/caf-2023-t9wass/countries/namibia.png",
    },

    {
      value: "nigeria",
      label: "Nigeria",
      image: "/caf-2023-t9wass/countries/nigeria.png",
    },
    {
      value: "cameroon",
      label: "Cameroon",
      image: "/caf-2023-t9wass/countries/cameroon.png",
    },

    {
      value: "equatorial_guinea",
      label: "equatorial Guinea",
      image: "/caf-2023-t9wass/countries/equatorial_guinea.png",
    },
    {
      value: "guinea",
      label: "Guinea",
      image: "/caf-2023-t9wass/countries/guinea.png",
    },

    {
      value: "egypt",
      label: "Egypt",
      image: "/caf-2023-t9wass/countries/egypt.png",
    },
    {
      value: "dr_congo",
      label: "DR Congo",
      image: "/caf-2023-t9wass/countries/dr_congo.png",
    },

    {
      value: "cape_verde",
      label: "Cape Verde",
      image: "/caf-2023-t9wass/countries/cape_verde.png",
    },
    {
      value: "mouritania",
      label: "Mouritania",
      image: "/caf-2023-t9wass/countries/mouritania.png",
    },

    {
      value: "senegal",
      label: "Senegal",
      image: "/caf-2023-t9wass/countries/senegal.png",
    },
    {
      value: "ivory_coast",
      label: "Ivory Coast",
      image: "/caf-2023-t9wass/countries/ivory_coast.png",
    },

    {
      value: "mali",
      label: "Mali",
      image: "/caf-2023-t9wass/countries/mali.png",
    },
    {
      value: "burkina_faso",
      label: "Burkina Faso",
      image: "/caf-2023-t9wass/countries/burkina_faso.png",
    },

    {
      value: "morocco",
      label: "Morocco",
      image: "/caf-2023-t9wass/countries/morocco.png",
    },
    {
      value: "south_africa",
      label: "South Africa",
      image: "/caf-2023-t9wass/countries/south_africa.png",
    },
  ];
  const khssiymsOptions = [
    {
      value: "jerry",
      label: "Jerry l9wass",
      image: "/caf-2023-t9wass/khssiym/jerry.png",
    },
    {
      value: "3zi",
      label: "3zi l9wass",
      image: "/caf-2023-t9wass/khssiym/l3zi.png",
    },
    {
      value: "self",
      label: "bghi ana li n9wss",
      image: "/caf-2023-t9wass/khssiym/user.png",
    },
  ];
  const save = async () => {
    if (country === "morocco") {
      setShowSb7anLah(true);
      return;
    }
    if (country && khssiym) {
      localStorage.country = country;
      localStorage.khssiym = khssiym;
      navigate("/show");
    }
  };

  return !showSb7anlah ? (
    <div className="fixed inset-0 pb-5 flex items-center justify-center">
      <div className="p-4 shadow-lg">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="select-country" value="khtar 3la mn bghi t9wss" />
          </div>
          <div className="w-full">
            <Select
              id="select-country"
              options={countryOptions}
              onChange={(v) => {
                setCountry(v!.value);
              }}
              formatOptionLabel={(country) => (
                <div className="flex gap-2 items-center ">
                  <img
                    className="w-8"
                    src={country.image}
                    alt="country-image"
                  />
                  <span>{country.label}</span>
                </div>
              )}
            />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="select-country"
              value="khtar lkhssimy li bghi t9wss bih"
            />
          </div>
          <div className="w-full">
            <Select
              id="select-khssiym"
              options={khssiymsOptions}
              onChange={(v) => {
                setKhssiym(v!.value);
              }}
              formatOptionLabel={(khssiym) => (
                <div className="flex gap-2 items-center ">
                  <img
                    className="w-8"
                    src={khssiym.image}
                    alt="country-image"
                  />
                  <span>{khssiym.label}</span>
                </div>
              )}
            />
          </div>
        </div>
        <div className="flex justify-end mt-3">
          <Button onClick={save}>Save</Button>
        </div>
      </div>
    </div>
  ) : (
    <Sb7anlah />
  );
}
