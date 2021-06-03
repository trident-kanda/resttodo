import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../util/supabase";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const { data, error } = await supabase
    .from('List')
    .insert([
      JSON.parse(req.body) 
    ])
if(data){
    res.status(200).json({"state":"OK"});
}
if(error){
    res.status(500).json({"state":"error"});
}
};
