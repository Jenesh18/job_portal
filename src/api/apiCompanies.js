import supabaseClient, { supabaseUrl } from "@/utils/supabase";


//get company
export async function getCompanies(token) {
    const supabase = await supabaseClient(token);
    const { error, data } = await supabase.from("companies").select("*");

    if (error) {
        console.error("Error fetching companies", error);
        return null;
    }

    return data;
}

// Add company
export async function addNewCompany(token, _, companyData) {
    const supabase = await supabaseClient(token);

    const random = Math.floor(Math.random() * 90000);
    const fileName = `logo-${random}-${companyData.name}`;

    const { error: storageError } = await supabase.storage.from("company-logo").upload(fileName, companyData.logo);

    if (storageError) throw new Error("Error uploading company logo");

    const logo_url = `${supabaseUrl}/storage/v1/object/public/company-logo/${fileName}`;

    const { error, data } = await supabase.from("companies")
        .insert([
            {
                name: companyData.name,
                logo_url: logo_url
            }
        ])
        .select("*");

    if (error) {
        console.error("Error fetching companies", error);
        return null;
    }

    return data;
}