import React from 'react'
import {IRBTitle, IRBSubTitle, IRBContent} from '../components/IRBElements';
import { Divider } from '@material-ui/core';

var title = "Creating Tools to Improve Collaboration in Shared Computational Notebooks";
var researcher1 = "1. Ge Zhang. Visiting Student, Allen School of CSE, Email: gezhang@cs.washington.edu, zhangge9194@pku.edu.cn (Contact person)";
var researcher2 = "2. Amy Zhang. Assistant Professor, Allen School of CSE";
var purpose = "The purpose of this study is to investigate user needs in data science collaboration, and the usefulness and usability of a collaborative computational notebook tool.";
var studyProcedures = "In this study, you will be asked some questions about behaviors in data science collaboration and user needs in using computational notebooks for collaboration. Then you will be introduced to the collaborative computational notebook tool and learn how to interact with it. Next, you will be asked to interact with the tool and asked to complete a questionnaire about the interactions with the tool over a few different scenarios. Finally, you will be asked to complete a post-study questionnaire. The study and the questionnaire is expected to take about 45min.";
var risk = "The risks and discomfort associated with participation in this study are no greater than those associated with everyday activities and the use of a personal computer or tablet device. Nonetheless, one experimenter will be present during the entire duration of the experiment and will stop the experiment at any time if the subjects request to stop the experiment.";
var benefit = "Each participant will receive a $15(USD) gift card. The knowledge received may be of value to data science collaboration research at the University of Washington."; 
var confidentiality = "All of the information you provide will be confidential except the audio recordings—video will not be recorded. T​he researchers may want to use any audio recording for illustrative reasons in p​resentations of this work online, in print for scientific or educational purposes. ​The system logs from you interacting with the tool such as code histories and your responses to the questionnaire will be anonymous and they will be analyzed by our research team."; 
var other = "You may refuse to participate and you are free to withdraw from this study at any time without penalty or loss of benefits to which you are otherwise entitled.";
var use = "The data of the system logs from you interacting with the tool from this study might be used for future studies. However, we will remove anything that might identify you from the data hence video recordings will not be stored ​for future studies. If we do so, that data may then be used for future research studies without getting additional permission from you.";

function CollaborativeNotebook ()  {

    return (
  <div style={{ textAlign: 'left' }}>
    {/* IRB title */}
    <IRBTitle text={title}></IRBTitle>
    <Divider/>
    <Divider/>

    {/* IRB subtitles */}
    <IRBSubTitle text='Researchers'></IRBSubTitle>
    <IRBContent text={researcher1}></IRBContent>
    <IRBContent text={researcher2}></IRBContent>
    <Divider/>

    <IRBSubTitle text='Purpose of the Study'></IRBSubTitle>
    <IRBContent text={purpose}></IRBContent>
    <Divider/>

    <IRBSubTitle text='Study Procedures'></IRBSubTitle>
    <IRBContent text={studyProcedures}></IRBContent>
    <Divider/>

    <IRBSubTitle text='Risks, Stree or Discomfort'></IRBSubTitle>
    <IRBContent text={risk}></IRBContent>
    <Divider/>

    <IRBSubTitle text='Benefits of the Study'></IRBSubTitle>
    <IRBContent text={benefit}></IRBContent>
    <Divider/>

    <IRBSubTitle text='Confidentiality of the Research Information'></IRBSubTitle>
    <IRBContent text={confidentiality}></IRBContent>
    <Divider/>

    <IRBSubTitle text='Other Information'></IRBSubTitle>
    <IRBContent text={other}></IRBContent>
    <Divider/>

    <IRBSubTitle text='Use of Information'></IRBSubTitle>
    <IRBContent text={use}></IRBContent>
    <Divider/>


  </div>)
};

export default CollaborativeNotebook;