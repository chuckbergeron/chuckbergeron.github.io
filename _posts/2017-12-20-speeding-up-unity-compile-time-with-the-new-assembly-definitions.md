---
excerpt_separator: <!--more-->
layout:    post
title:     "Unity 2017.3: Speeding up Compile Time with the New Assembly Definitions"
author:    "chuckbergeron"
category:  blog
date:      2017-12-20 13:02
published: true
tags:
- unity
- performance
shared_square_image: posts/unity_speed_up_compile_time.jpg
shared_description:  FILLIN
---
<!-- shared_square_image: posts/FILLIN.jpg -->

<div class="row">
    <div class="twelve columns">
        <!-- <img src=" asset_path 'posts/FILLIN.gif' " class="img-responsive" alt="Vancouver VR Community Launch Animation">-->
        <!--  style="margin: 0 auto;" -->
    </div>
</div>

In Unity, each time you make any change to your C# code the entire project is recompiled. This can take anywhere from a couple of seconds to minutes, depending on your computer's hardware, the size of your project and number of plugins.

Thankfully, a new feature was released yesterday in Unity 2017.3 which allows you to selectively recompile certain files, instead of the entire project. This can greatly speed up your development time, as you typically do not change code in your 3rd-party plugins.

Read on for a quickstart guide on how to get this working for you.

<!--more-->

<h5>
  Assembly Defintions: Quickstart
</h5>

I followed the same layout which was provided by Unity in a sample project one of their devs they linked to. I'm unable to find that same sample project at the moment, but the general layout looked something like this:

**Assets/AssetsRoot-ASM.asmdef**
  (References: Plugins-ASM.asmdef)

  **Assets/Plugins/Plugins-ASM.asmdef**
  (No References)

**Assets/Plugins/PostProcessing/Editor/PostProcessingEditor-ASM.asmdef**
  (References: Plugins-ASM.asmdef)
  (Includes: "Editor"-only!)

**Assets/Scripts/ScriptsASM.asmdef**
  (No References)


For the tiny project I'm currently working on, I was able to shave a couple of seconds off (from 8 seconds to 5.5 seconds) by avoiding recompilation of the 4 plugins I'm using when I change my scripts. I haven't tested this on one of the larger projects I've worked on yet, but I'm excited to see how much of a difference it makes.


<img src="{% asset_path 'posts/unity-compile-times-before-and-after.jpg' %}" class="img-responsive" alt="Unity compile times, before and after">
<span class="caption">Compile Times (AKA: thumb-twiddling time) Before and After</span>

<ul>
    <li>
        Download Unity 2017.3 Here: https://unity3d.com/get-unity/download
    </li>
    <li>
        Documentation: https://docs.unity3d.com/2017.3/Documentation/Manual/ScriptCompilationAssemblyDefinitionFiles.html
    </li>
    <li>
        Unity's Blog Post: https://blogs.unity3d.com/2017/11/22/unity-2017-3b-feature-preview-assembly-definition-files-and-transform-tool/
    </li>
    <li>
        Compile Time Script on Gist: https://gist.github.com/chuckbergeron/245e0f5906c89f7d01c02eeb052e1b04
    </li>
</ul>

<!-- XXX MY EMAIL NEWSLETTER -->
<!-- XXX COMMENTS -->

Happy performant game developing!

😄

Twitter: https://twitter.com/chuckbergeron
