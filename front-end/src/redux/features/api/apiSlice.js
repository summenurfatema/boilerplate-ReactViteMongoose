import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
//
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/v1",
    // credentials:"include"  
  }),
  endpoints: (builder) => ({}),
  tagTypes: ["Memmer","SingleMember","Post","SingleMemberPost","Friend","Project","ProjectJoinRequest","Payment","Skill","SingleMemberSkill","SocialInfo","SingleMemberSocialInfo","License","SingleMemberLicense","Experience","SingleMemberExperience"],
});

