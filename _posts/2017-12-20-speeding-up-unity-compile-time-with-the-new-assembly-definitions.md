---
excerpt_separator: <!--more-->
layout:    post
title:     "Unity 2017.3: Speeding up Compile Time with the New Assembly Definitions"
author:    "chuckbergeron"
category:  blog
date:      2017-12-20 12:02
published: true
tags:
- unity
- performance
shared_square_image: posts/unity_compile_time_before_after.jpg
shared_description:  A new feature in Unity 2017.3 can speed up the amount of time you spend developing and in turn improve your life.
---
<!-- shared_square_image: posts/FILLIN.jpg -->

<div class="row">
  <div class="twelve columns">
    <img src="/assets/posts/{{ 'unity_compile_time_before_after.jpg' }}" class="img-responsive" alt="Unity compile times, before and after">

    <span class="caption">Compile Time (AKA: thumb-twiddling time) Comparison</span>
  </div>
</div>

In Unity, each time you make any change to your C# code the entire project is recompiled. This can take anywhere from a couple of seconds to minutes, depending on your computer's hardware, the size of your project and number of plugins.

Thankfully, a new feature was released yesterday in Unity 2017.3 which allows you to selectively recompile certain files, instead of the entire project. This can greatly speed up your development time, as you typically do not change code in your 3rd-party plugins.

Read on for a quickstart guide on how to get this working for you.

<!--more-->

<h4>
  Assembly Definitions: Quickstart
</h4>

I followed the same layout which was provided by Unity in a sample project one of their devs they linked to. I'm unable to find that same sample project at the moment, but the general layout looked something like this:

<ul>
  <li>
    <strong>Assets/AssetsRoot-ASM.asmdef</strong> <small>(References: Plugins-ASM.asmdef)</small>
  </li>
  <li>
    <strong>Assets/Plugins/Plugins-ASM.asmdef</strong> <small>(No References)</small>
  </li>
  <li>
    <strong>Assets/Plugins/PostProcessing/Editor/PostProcessingEditor-ASM.asmdef</strong> <small>(References: Plugins-ASM.asmdef) <em>and</em> (Includes: "Editor"-only!)</small>
  </li>
  <li>
    <strong>Assets/Scripts/ScriptsASM.asmdef</strong> <small>(No References)</small>
  </li>
</ul>

In Unity 2017.3, you can create a new type of file called "Assembly Defintion" the same way you would create a sphere, cube, script, shader, etc. (using the "Create" menu). Place each of these Assembly Definition files in the directories you want to control using Assemblies.

<hr>

For the tiny project I'm currently working on, I was able to shave a couple of seconds off (**from 8 seconds to 5.5 seconds**) by avoiding recompilation of the 4 plugins I'm using when I change my scripts. I haven't tested this on one of the larger projects I've worked on yet, but I'm excited to see how much of a difference it makes.

<ul>
    <li>
        Download Unity 2017.3 Here: <a href="https://unity3d.com/get-unity/download">https://unity3d.com/get-unity/download</a>
    </li>
    <li>
        Documentation: <a href="https://docs.unity3d.com/2017.3/Documentation/Manual/ScriptCompilationAssemblyDefinitionFiles.html">https://docs.unity3d.com/2017.3/Documentation/Manual/ScriptCompilationAssemblyDefinitionFiles.html</a>
    </li>
    <li>
        Unity's Blog Post: <a href="https://blogs.unity3d.com/2017/11/22/unity-2017-3b-feature-preview-assembly-definition-files-and-transform-tool/">https://blogs.unity3d.com/2017/11/22/unity-2017-3b-feature-preview-assembly-definition-files-and-transform-tool/</a>
    </li>
    <li>
        Compile Time Script on Gist: <a href="https://gist.github.com/chuckbergeron/245e0f5906c89f7d01c02eeb052e1b04">https://gist.github.com/chuckbergeron/245e0f5906c89f7d01c02eeb052e1b04</a>
    </li>
</ul>

<!-- XXX MY EMAIL NEWSLETTER -->
<!-- XXX COMMENTS -->

Happy performant game developing!

😄
