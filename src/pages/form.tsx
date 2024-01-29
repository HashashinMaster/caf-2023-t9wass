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
    { value: "angola", label: "Angola", image: "/countries/angola.png" },
    { value: "namibia", label: "Namibia", image: "/countries/namibia.png" },

    { value: "nigeria", label: "Nigeria", image: "/countries/nigeria.png" },
    { value: "cameroon", label: "Cameroon", image: "/countries/cameroon.png" },

    {
      value: "equatorial_guinea",
      label: "equatorial Guinea",
      image: "/countries/equatorial_guinea.png",
    },
    { value: "guinea", label: "Guinea", image: "/countries/guinea.png" },

    { value: "egypt", label: "Egypt", image: "/countries/egypt.png" },
    { value: "dr_congo", label: "DR Congo", image: "/countries/dr_congo.png" },

    {
      value: "cape_verde",
      label: "Cape Verde",
      image: "/countries/cape_verde.png",
    },
    {
      value: "mouritania",
      label: "Mouritania",
      image: "/countries/mouritania.png",
    },

    { value: "senegal", label: "Senegal", image: "/countries/senegal.png" },
    {
      value: "ivory_coast",
      label: "Ivory Coast",
      image: "/countries/ivory_coast.png",
    },

    { value: "mali", label: "Mali", image: "/countries/mali.png" },
    {
      value: "burkina_faso",
      label: "Burkina Faso",
      image: "/countries/burkina_faso.png",
    },

    { value: "morocco", label: "Morocco", image: "/countries/morocco.png" },
    {
      value: "south_africa",
      label: "South Africa",
      image: "/countries/south_africa.png",
    },
  ];
  const khssiymsOptions = [
    {
      value: "jerry",
      label: "Jerry l9wass",
      image: "/khssiym/jerry.png",
    },
    {
      value: "3zi",
      label: "3zi l9wass",
      image: "/khssiym/l3zi.png",
    },
    {
      value: "self",
      label: "bghi ana li n9wss",
      image: "/khssiym/user.png",
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
        <div className="flex justify-end mt-3">
          <Button onClick={save}>Save</Button>
        </div>
      </div>
    </div>
  ) : (
    <Sb7anlah />
  );
}
