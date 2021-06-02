import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../util/supabase";

export default async (req:NextApiRequest, res:NextApiResponse) => {
  let { data: List, error } = await supabase.from("List").select("id,name,state");
  if (List) {
    res.status(200).json(List);
  } else {
    res.status(500).json([])
  }
};
