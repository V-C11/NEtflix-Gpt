import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPRTED_LLANGUAGES } from "../utils/constant";
import { USER_AVTAR } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const handleGptSeach = () => {
    // Toggle Gpt Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // UnsubsCribe when component unmounts
    return () => unSubscribe(); // unsubscribing for ebverry refresh
  }, []);

  return (
    <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center">
      <img className="w-24 md:w-36 mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex mt-4 p-2 justify-between md:gap-x-3 p-2 items-center">
          {showGptSearch && (
            <select
              className="py-1 text-sm px-2 md:py-2 px-4 mx-2 my-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPRTED_LLANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-sm py-1  md:py-2 px-4 m-2 mx-4 my-2 bg-purple-800 text-white rounded  "
            onClick={handleGptSeach}
          >
            {showGptSearch ? "HomePage" : "GPTSearch"}
          </button>
          {/* <div className="w-10"> */}
          <img
            className="hidden md:block w-10 h-10 rounded-lg "
            src={user?.photoURL ? user.photoURL : USER_AVTAR}
            alt="User avatar"
          />

          {/* <img
            className="w-12 rounded-lg "
            src="https://ih1.redbubble.net/image.618379802.1473/flat,800x800,075,f.u2.jpg"
            alt="log"
          /> */}
          {/* </div> */}
          <button
            onClick={handleSignOut}
            className="text-xs  py-1.5   bg-red-700 md:bg-red-500 py-2 px-4 m-2 mx-4 my-2  text-white rounded text-center font-medium hover:bg-slate-950 hover:text-yellow-500 "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
