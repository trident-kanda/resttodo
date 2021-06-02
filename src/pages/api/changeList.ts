import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../util/supabase";
type data = {
    id:number
    state:boolean
}
export default async (req:NextApiRequest, res:NextApiResponse) => {
    const data:data = JSON.parse(req.body)
    const { data:List, error } = await supabase
    .from('List')
    .update({ state:  data.state})
    .eq('id', data.id)
  if (List) {
    res.status(200).json({state:"OK"});
  } 
  if(error){
    res.status(500).json({state:"error"})
  }
};
