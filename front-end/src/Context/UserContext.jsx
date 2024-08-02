import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useGetAllUsersQuery, useGetSingleUserQuery } from "../redux/features/auth/authApi";
import { useSelector } from "react-redux";


export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const { user } = useSelector((state) => state.auth);
  const userId = user?._id;

  //************************************************************************************************************** */
  //********************************************     GET   ******************************************************* */
  //************************************************************************************************************** */

  //-------------- get each user info
  const {
    data: singleUser,
    isLoading: isFetchingUser,
    error: userError,
  } = useGetSingleUserQuery(userId, { skip: !userId });

  //-------------- get all user
  const {
    data: getAllUsers,
    isLoading: isFetchingAllUsers,
    error: allUserError,
  } = useGetAllUsersQuery(userId, { skip: !userId });


  



  //************************************************************************************************************** */
  //********************************************     POST   ******************************************************* */
  //************************************************************************************************************** */


  
  
  //-------------- post skill of specific user
//   const [
//     addSkills,
//     { data: responseAddSkillData, isFatchingAddSkill, error: addSkillError },
//   ] = useAddSkillsMutation();

  

  //************************************************************************************************************** */
  //********************************************     PUT   ******************************************************* */
  //************************************************************************************************************** */

  // ---------- update user skill
//   const [
//     updateSkills,
//     { isUpdateSkillLoading, error: responseUpdateSkillError },
//   ] = useUpdateSkillsMutation();

  

  //************************************************************************************************************** */
  //********************************************     DELETE   ******************************************************* */
  //************************************************************************************************************** */

  //************************************************************************************************************** */
  //********************************************    FETCH DATA   ************************************************* */
  //************************************************************************************************************** */

  useEffect(() => {
    if (
      isFetchingUser ||
      isFetchingAllUsers       
    ) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [
    isFetchingUser,
    isFetchingAllUsers,

  ]);

  //************************************************************************************************************** */
  //********************************************    FETCH ERROR   ************************************************* */
  //************************************************************************************************************** */

  useEffect(() => {
    if (
      userError ||
      allUserError 

      
    ) {
      console.error("Error fetching user data:", {
        userError,
        allUserError,
        
      });
    }
  }, [
    userError,
    allUserError,

  ]);

  //************************************************************************************************************** */
  //********************************************    EXPORT DATA   ************************************************* */
  //************************************************************************************************************** */

  const shareableData = {
    loading,
    user,
    getAllUsers,
    setLoading,
    darkMode,
    setDarkMode,
    singleUser,
   
  };

  return (
    <AuthContext.Provider value={shareableData}>
      {children}
    </AuthContext.Provider>
  );
};

UserContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext;

