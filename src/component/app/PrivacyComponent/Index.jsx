import { Box, Heading, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import Back from "../../core/Back";
import ContainerWrapper from "../../core/ContainerWrapper";
import Header from "../../core/Header";
import BreadCrumbs from "../../core/BreadCrumbs";
import HeroSection from "../AboutUsComponent/HeroSection";
import CustomHeading from "../CookieComponent/CustomHeading";
import CustomText from "../CookieComponent/CustomText";
import Footer from "../../core/Footer/Footer";

const PrivacyMain = () => {
  return (
    <>
      <Box>
      <Header
        logoUrl="/blak-logo.png"
        barBg1="#252525"
        barBg2="rgba(37, 37, 37, 0.8)"
        barBg3="rgba(37, 37, 37, 0.4)"
      />
      <ContainerWrapper>
        <Back
          imgUrl="/dark-back.svg"
          url="/privacynotice"
        />
        <BreadCrumbs PageLink="/privacynotice" PageName=" Privacy Notice" />

        <HeroSection Text1="Privacy Notice" />
        <Box
          mb="48px"
          mt={{ base: "80px", md: "100px", lg: "130px", xl: "160px" }}
        >
          <CustomHeading HeadingText="Privacy Notice" />
          
          <CustomText Textb="For information related to our Motherbrain solution, please see Privacy Notice here." />
       
          
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText=" General" />
          <CustomText marginbtm="24px" Textb=" The information in this notice is provided for visitors to our website. If you are looking for specific information about how we process information about investors in our funds or other investment products, please see our privacy notice for investors in EQT funds below. If you are in the network of an EQT employee, EQT may store and use your personal data for internal business purposes" />
          <CustomText marginbtm="24px" Textb=" If you submit information about yourself through this website - for example, by sending an email to one of the addresses displayed on the site - we will only use your information for the intended purpose or purposes for which it has been provided. For example, we will use it for the purposes of responding to your enquiry or if your enquiry requires investigation or research on our part, then to facilitate such purposes. We may also store your information for our internal business purposes (for example, to improve the site and our services generally). We will not disclose your information to other persons outside EQT, except: (i) to service providers, investment advisers, professional advisors and their respective agents and/or employees under strict confidentiality obligations; (ii) exceptionally, where we are required to make the disclosure by law, in connection with legal proceedings or otherwise upon governmental or regulatory request; or (iii) where we believe it is necessary or appropriate to protect the rights or property of EQT." />
          <CustomText marginbtm="24px" Textb=" If, as a consequence of contacting EQT, we use your details to send you information about EQT which we believe may be of interest to you (other than in response to your original query), you will have the opportunity to tell us that you do not wish to receive that information. Alternatively, you may contact EQT at dataprotection@eqtpartners.com and ask us not to contact you for such purposes and/or not to provide you with such information." />
          <CustomText marginbtm="24px" Textb=" As EQT uses a common IT environment, when you provide information to EQT it may be accessed by authorised persons within EQT from countries whose laws provide various levels of protection for personal data which may not be equivalent to the level of protection that is provided in member states of the European Economic Area. EQT maintains appropriate organisational and security management systems to protect your personal information throughout our organisation." />
          <CustomText marginbtm="24px" Textb="Some of the affiliates of EQT are authorised firms that are required to record telephone calls. Recordings of telephone calls will be stored only for as long as required by law and will not be used for any other purpose except as may be required in connection with legal proceedings or otherwise upon governmental or regulatory request."/>
          <CustomText marginbtm="24px" Textb="We do not seek to identify visitors to this website. However, we generally record certain usage information such as the number and frequency of visitors to this site. The information we may collect may include the websites that you access immediately before and after you visit our site, the internet browsers you are using and your IP address. If we use such data at all, it will be on an aggregate basis and we will not disclose to any third party, other than IT providers, any information that could be used to identify you personally, except as may be required by law, in connection with legal proceedings or otherwise upon governmental or regulatory request. This website uses cookies - small data files which are downloaded on your hard disk so that the site can monitor your access to the site and recognizes that you have visited the site before, without identifying you. For more information, please refer to EQT’s Cookie Policy which can be found here. If you don't want to accept cookies, you should read the information that came with your browser software to see how you can turn off the automatic download feature."/>
          <CustomText  Textb="We welcome suggestions and comments about the site and our business. As noted above, we will only use your information in relation to a suggestion or comment for the purpose which it was provided and shared in accordance with the policy described above.You have the right to see a copy of the information that we hold about you and have information that we hold about you corrected or deleted. You may also object to the processing of our information where we process your data on legitimate grounds. If you wish to do so, please contact us at: "/>
          <Link
       fontFamily="Montserrat"
             textAlign={{base:'center',md:'left'}}
            color="#000000"
            fontSize={{base:'18px',md:'20px',xl:'24px'}}
            fontWeight="500"
            lineHeight={{base:'38px',md:'40px',xl:'44px'}}
            textDecoration="underline"
            href="#"
          
          >
dataprotection@eqtpartners.com
          </Link>
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="1. This Notice" />
          <CustomText marginbtm="24px" Textb="This Notice is provided by EQT AB on behalf of itself and its various divisions, branches, subsidiaries, affiliates and any other EQT associated entities (collectively, “EQT” or “we”, “us” or “our”). This notice is provided for the benefit of natural persons (excluding those working for, or within, our organisation) with whom we interact in the course of conducting our business. This includes people who view our website or make contact with us through the website, investors and prospective investors in our various funds or investment vehicles, individuals acting for, or on behalf of, or otherwise providing us with personal data in connection with actual or prospective institutional investors in such funds or investment vehicles and all other persons with whom we interact in the course of our business (“you”). " />
          <CustomText Textb=" EQT manages a dynamic alternative investment fund business and this Notice is expected to be updated from time to time, e.g., if there are changes in law, or to reflect other changes in our policies and procedures with respect to our handling of your personal data. If you have an ongoing business or investment relationship with EQT, we encourage you to visit our website regularly to review any changes to this Notice.You may contact EQT if you have any queries about this Notice or its currency – please see the contact details below." />
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="2. Data Protection Terminology" />
          <CustomText Textb=" Certain words are given specific meanings under data protection legislation. Please note that those divisions, branches, subsidiaries and affiliates of EQT located within the EEA are subject to the GDPR (as defined below), but if you are not resident in the EEA, there may be other laws in your country that are different. Other laws may use different or additional legal terms, or define the same terms differently. The terms listed below are intended to have the following meanings in this Notice:" />
          <CustomText Textb="“adequacy decision” means a decision of the European Commission determining that a country outside the EEA ensures an adequate level of protection for personal data; " />
          <CustomText Textb=" “criminal offences data” means personal data about any actual or alleged criminal convictions or offences related security measures;“criminal offences data” means personal data about any actual or alleged criminal convictions or offences related security measures;" />
          <CustomText Textb=" “data controller” means the EQT entity that decides how and why personal data is processed;" />
          <CustomText Textb="“EEA” means the member states of the European Economic Area; " />
          <CustomText Textb="“EU data protection laws” means all laws and regulations relating to the protection of personal data applicable in the EU, the EEA and, if outside the EU, the UK, including: the Data Protection Directive (95/46/EC), the Privacy and Electronic Communications (EC Directive) Regulations 2003, the Data Protection (Processing of Sensitive Personal Data) Order 2000, Regulation 2016/679 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data (“GDPR”), and any other applicable legal requirement concerning the protection and processing of personal data; " />
          <CustomText Textb=" “personal data” means information from which it is possible to identify a natural person (an individual), or information from which any individual is identifiable;" />
          <CustomText Textb=" “processing” means anything that is done with personal data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction;" />
          <CustomText Textb="“processor” means the person or entity that processes personal data on behalf of a data controller; and " />
          <CustomText Textb="“sensitive personal data” means personal data about an individual’s race or ethnicity, political opinions, religious or philosophical beliefs, trade union membership, physical or mental health, sexual life, criminal offences or any other information that may be deemed to be sensitive under applicable law. " />
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="3. Who controls the data we collect?" />
          <CustomText Textb="The general partner of any EQT investment fund in which you are invested is a data controller. If the general partner has engaged a fund manager, an investment adviser, or the investment manager has itself engaged a portfolio manager, these additional entities may also process your data will act as independent data controllers. " />
         
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="4. From whom do we collect personal data?" />
          <CustomText marginbtm="24px" Textb=" EQT collects your personal data from a variety of sources:" />
          <CustomText Textb=" a) when you provide it to us, e.g., in telephone conversations, in voicemails, through written correspondence, or via e-mail;" />
          <CustomText Textb="b) when you engage in business with us, e.g., by subscribing to a fund or investment vehicle (including, in the case of an investment relationship, providing applicable any anti-money laundering identification, verification documentation, and source of funds information), responding to an investor questionnaire, requesting treatment as a professional client, etc.; " />
          <CustomText Textb="c) when you visit our website, including any registration information or information captured via “cookies”; " />
          <CustomText Textb="d) when it is available in the public domain, e.g., on the internet, in books, journals, magazines, news reports, in public directories, registries, or any other source available to the public; and " />
          <CustomText Textb="e) when we receive information about you from third parties e.g.: " />
          <UnorderedList mb="24px">
          <ListItem>   <CustomText Textb="tax authorities, including those that are based outside the UK and the EEA if the relevant applicant for interests in an EQT fund or other investment vehicle is subject to tax in another jurisdiction;" /></ListItem>
          <ListItem> <CustomText Textb=" governmental and competent regulatory authorities to whom we may have regulatory obligations;" /></ListItem>
          <ListItem> <CustomText Textb="credit agencies; and " /></ListItem>
          <ListItem> <CustomText Textb=" fraud prevention and detection agencies and organisations." /></ListItem>
          </UnorderedList>
          <CustomText marginbtm="24px" Textb="The information collected in this fashion could relate to you, or your organisation, its officers, directors, partners, employees, shareholders, ultimate beneficial owners or affiliates or to any other data subjects. " />
          <CustomText Textb=" EQT may also create personal data by combining or organising our records, or combining information you have provided with information received from other sources. This will include information collected in an online or offline context." />
         
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="5. What data do we collect?" />
          <CustomText marginbtm="24px" Textb=" The types of personal data we collect and share may depend on the nature of your relationship with EQT. With respect to an investment in an EQT fund or other investment vehicle, we may process the following categories of personal data:" />
          <CustomText Textb="a) names, dates of birth and birth place; " />
          <CustomText Textb=" b) contact details and professional addresses (including physical address, email address and telephone number);" />
          <CustomText Textb="c) account data, payment instructions, and other information contained in any document you provide to EQT (whether directly or indirectly, e.g., through a financial adviser); " />
          <CustomText Textb="d) risk tolerance, transaction history, investment experience and investment activity, or if the decision to invest is made by individuals within your organisation, information about their experience, knowledge and expertise in investing in alternative funds; " />
          <CustomText Textb=" e) information regarding your status under various laws and regulations, including social security number, tax status, income and assets;" />
          <CustomText Textb="f) accounts and transactions with other institutions; " />
          <CustomText Textb=" g) information regarding your interest and holding in EQT funds or other investment vehicles, including ownership percentage, capital investment, income and losses;" />
          <CustomText Textb="h) information regarding your citizenship and location of residence; " />
          <CustomText Textb=" i) source of funds used to make the investment in the EQT fund or other investment vehicle; and" />
          <CustomText marginbtm="24px" Textb=" j) anti-money laundering, identification (including passport and drivers’ license), and verification documentation and, if applicable, additional information for any individual regarded as a politically exposed person." />
          <CustomText Textb=" We will only process sensitive personal data, to the extent required by law, and then only with your express consent." />
         
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="6. Why do we collect personal data?" />
          <CustomText Textb="EQT needs a lawful basis to process your personal data. Depending on the nature of the data and your relationship with EQT, there can often be more than one lawful basis for processing. The table below describes certain processing activities associated with an investment in an EQT fund and the various lawful grounds for processing that data, including where personal data is provided in connection with an investment by an institutional investor in an EQT fund or other investment vehicle: " />
         
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="Description of data processing" />
          <CustomText Textb=" KYC due diligence, including confirming and verifying your identity (including, if applicable, your credit-worthiness by using credit reference agencies), screening against government, and/or law enforcement sanctions lists; other anti-money laundering and countering terrorist financing due diligence and, conducting “well informed investor” or “professional client” checks in assessing suitability of investors." />
         
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="Lawful basis for processing" />
          <CustomText Textb="the processing is necessary for compliance with a legal obligation to which the controller is subject;
the processing is necessary for the purposes of the legitimate interests pursued by the controller, provided that those interests do not override your fundamental rights and freedoms; and
(for an investor who is the data subject) the processing is necessary for the performance of a contract with you or to take steps prior to entering into a contract with EQT. " />
         
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="Description of data processing" />
          <CustomText Textb="Administering our relationship with the investor and performance of all tasks necessary to provide the investment services and all related communications, both in preparing for admission to a fund (negotiation, preparation and signature of documentation) and all ongoing communications and reporting (whether communicating directly with the investor or to its representatives, advisors and agents), as well as providing information to actual or prospective lenders or their advisors and making any relevant regulatory, tax or other relevant filings (including with respect to portfolio investments of relevant EQT funds or other investment vehicles in which you participate) and generally operating and managing the activities of relevant EQT funds and/or other investment vehicles. " />
         
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="Lawful basis for processing" />
          <CustomText Textb=" (where the investment contract incorporates an expression of interest in receiving such information) the processing is necessary for the purposes of the legitimate interests pursued by the controller, provided that those interests do not override your fundamental rights and freedoms;
(for an investor who is the data subject) the processing is necessary for the performance of a contract with you or to take steps prior to entering into a contract with EQT; and
the investor’s express consent." />
         
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="Description of data processing" />
          <CustomText Textb="If applicable, monitoring or recording or telephone communications. " />
         
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="Lawful basis for processing" />
          <CustomText Textb="the processing is necessary for compliance with a legal obligation to which the controller is subject. " />
         
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="Description of data processing" />
          <CustomText Textb="Maintenance and management of our IT infrastructure and communications systems; operation of IT security; and IT security audits. " />
         
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="Lawful basis for processing" />
          <CustomText Textb="the processing is necessary for compliance with a legal obligation to which the controller is subject; and the processing is necessary for the purposes of the legitimate interests pursued by the controller, provided that those interests do not override your fundamental rights and freedoms." />
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="7. Recipients of the data" />
          <CustomText Textb="EQT may disclose personal data, where permitted by EU data protection laws, to other entities within the EQT group (including their employees, directors and consultants) and third parties, professional advisers, lenders, data processors and other persons engaged to fulfil the purposes described in this Notice, including, without limitation, the administrators to EQT funds (currently being members of the Citco group) and their external data processing centres and dispatch or payment agents. In addition, EQT may share personal data with regulatory bodies having competent jurisdiction over them, as well as with the tax authorities, auditors and tax advisers (where necessary or required by law). " />
         
        </Box>
        <Box mb="48px">
          <CustomHeading HeadingText="8. Transfer of data to a third country" />
          <CustomText Textb="EQT’s business is international and EQT may therefore need to transfer your personal data to third parties located in countries which may not provide appropriate or suitable safeguards. Transferees will include third parties noted in section (7) above as well as other members within the EQT group. Where we transfer your data outside the European Economic Area we will do so on the basis of: (i) an adequacy decision; (ii) model contract clauses; or (iii) another valid transfer mechanisms.For more information about the safeguards applied by EQT to international transfers, please contact EQT. " />
         
        </Box>
        
<Box mb="48px">
          <CustomHeading HeadingText="9. Retention and security of personal data" />
          <CustomText Textb="We employ appropriate technical and organisational measures to protect personal data within our control against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, unauthorised access, and other unlawful or unauthorised forms of processing.
Personal data may be kept for as long as it is required for legitimate business purposes, to perform contractual obligations, or where longer, such longer period as is required by applicable legal or regulatory obligations or for any applicable limitation period under applicable law. Personal data will be retained throughout the life cycle of any investment, however no longer than necessary with regard to the purpose of the investor’s relationship with EQT. Some personal data will be retained after a data subject ceases to be an investor in an EQT fund. " />
         
        </Box>
        
<Box mb="48px">
          <CustomHeading HeadingText="10. Data Subject Rights" />
          <CustomText Textb="You have the right: " />
          <UnorderedList my="24px">
          <ListItem>   <CustomText Textb="to request access to, or copies of, your data;" /></ListItem>
          <ListItem> <CustomText Textb="to request rectification of your personal data;" /></ListItem>
          <ListItem> <CustomText Textb="to request that the processing of your data is restricted;" /></ListItem>
          <ListItem> <CustomText Textb=" to request erasure of your personal data;" /></ListItem>

          <ListItem> <CustomText Textb=" to exercise your right to data portability;" /></ListItem>
          <ListItem> <CustomText Textb=" where we rely on your consent to process data, to withdraw your consent; and" /></ListItem>
          <ListItem> <CustomText Textb=" the right not to be subject to automated decision-making." /></ListItem>
          </UnorderedList>
          <CustomText Textb="
Please note that EQT does not use automated decision-making. The right to erasure is not absolute and it may not always be possible to erase personal data on request, including where the personal data must be retained to comply with a legal obligation. Erasure of the personal data requested to fulfil the purposes described in this Notice, may result in the inability to provide the services to the investor. " />
         
        </Box>
        
<Box mb="48px">
          <CustomHeading HeadingText="11. Complaints" />
          <CustomText Textb=" If you have any concerns about the way in which EQT uses your personal data please contact us at:" />
          <Link
       fontFamily="Montserrat"
             textAlign={{base:'center',md:'left'}}
            color="#000000"
            fontSize={{base:'18px',md:'20px',xl:'24px'}}
            fontWeight="500"
            lineHeight={{base:'38px',md:'40px',xl:'44px'}}
            textDecoration="underline"
            href="#"
          
          >
 dataprotection@eqtpartners.com
          </Link>
          <CustomText Textb=" If you want to complain, you may also contact the data protection authority in your country." />
         
        </Box>
      </ContainerWrapper>
      <Footer/>
      </Box>
    </>
  );
};

export default PrivacyMain;
