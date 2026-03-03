\documentclass[11pt,a4paper]{article}

\usepackage[margin=0.9in]{geometry}
\usepackage{titlesec}
\usepackage{hyperref}
\usepackage{xcolor}
\usepackage{enumitem}
\usepackage{fontawesome5}
\usepackage{tcolorbox}
\usepackage{setspace}

\hypersetup{
    colorlinks=true,
    urlcolor=blue
}

% ---------- Colors ----------
\definecolor{primary}{HTML}{2563EB}
\definecolor{secondary}{HTML}{1E293B}
\definecolor{accent}{HTML}{0F172A}

% ---------- Section Style ----------
\titleformat{\section}
{\large\bfseries\color{primary}}
{}
{0em}
{}[\titlerule]

% ---------- Custom Box ----------
\newtcolorbox{mybox}{
    colback=gray!5,
    colframe=primary,
    arc=6pt,
    boxrule=1pt
}

\begin{document}

\begin{center}
    {\Huge \textbf{\color{secondary} My Portfolio Website}}\\[6pt]
    {\large \color{accent} Modern Web Developer Portfolio}\\[10pt]
    \faGlobe \hspace{5pt}
    \href{https://incandescent-shortbread-2fd593.netlify.app/}{https://incandescent-shortbread-2fd593.netlify.app/}
\end{center}

\vspace{1em}

% ---------- About ----------
\section*{\faUser\hspace{6pt} About the Project}

\begin{mybox}
This is my personal portfolio website built to showcase my skills,
projects, and experience as a web developer. The website features a modern UI,
responsive design, and smooth navigation to deliver an excellent user experience.
\end{mybox}

\vspace{1em}

% ---------- Tech Stack ----------
\section*{\faCode\hspace{6pt} Tech Stack}

\begin{itemize}[leftmargin=*]
    \item \textbf{HTML5} -- Website structure
    \item \textbf{CSS3} -- Styling and responsiveness
    \item \textbf{TypeScript} -- Strongly typed JavaScript
    \item \textbf{React.js} -- Component-based frontend development
\end{itemize}

\vspace{1em}

% ---------- Features ----------
\section*{\faStar\hspace{6pt} Key Features}

\begin{itemize}[leftmargin=*]
    \item Fully Responsive (Mobile + Desktop)
    \item Clean and Modern UI Design
    \item Project Showcase Section
    \item Skills and About Me Section
    \item Contact Form Integration
    \item Smooth Navigation Experience
\end{itemize}

\vspace{1em}

% ---------- Installation ----------


% ---------- Contact ----------
\section*{\faEnvelope\hspace{6pt} Contact}

\faGithub \hspace{5pt}
\href{https://github.com/Mayank11227}{github.com/your-username}

\vspace{6pt}

\faLinkedin \hspace{5pt}
www.linkedin.com/in/mayank-y-b42929356

\vspace{6pt}

\faEnvelope \hspace{5pt}
mayank1112227@gmail.com

\vspace{2em}

\begin{center}
    \color{gray}
    \textit{Thank you for visiting my portfolio repository!}
\end{center}

\end{document}
