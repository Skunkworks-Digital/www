<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skunkworks Digital - Transforming Businesses Through Digital Innovation</title>
    <!-- Carbon Design System CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/carbon-components/10.58.1/css/carbon-components.min.css">
    <!-- Animation library -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <!-- IBM Plex Sans Font -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/IBM-type/0.5.4/css/ibm-type.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <!-- For cross-browser compatibility -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <!-- Ensuring proper rendering on all devices -->
    <meta name="format-detection" content="telephone=no">
    <meta name="description" content="Skunkworks Digital - Empowering Businesses to Scale Digitally through comprehensive digital transformation solutions, e-commerce growth, and marketing automation.">
    <meta name="keywords" content="digital transformation, e-commerce, CRM, automation, web development, SEO, social media marketing">
    <meta name="theme-color" content="#0f62fe">
    <!-- Open Graph tags for social sharing -->
    <meta property="og:title" content="Skunkworks Digital - Digital Transformation Experts">
    <meta property="og:description" content="Empowering businesses to scale digitally with comprehensive digital solutions and strategies.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://skunkworksdigital.com/">
    <meta property="og:image" content="https://skunkworksdigital.com/images/og-image.jpg">
    <!-- Twitter Card data -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Skunkworks Digital - Digital Transformation Experts">
    <meta name="twitter:description" content="Empowering businesses to scale digitally with comprehensive digital solutions and strategies.">
    <meta name="twitter:image" content="https://skunkworksdigital.com/images/twitter-image.jpg">


    <!-- Favicon -->
    <link rel="icon" href="Alogo1.png" type="image/x-icon">
    <!-- Optional PNG fallback -->
    <link rel="icon" href="Alogo1.png" type="image/png">
    <!-- Optional SVG for modern browsers -->
    <link rel="icon" href="Alogo1.jpeg" type="image/svg+xml">

    <style>
        :root {
            /* Carbon Design System colors */
            --cds-ui-background: #f4f4f4;
            --cds-text-01: #161616;
            --cds-text-02: #525252;
            --cds-ui-01: #ffffff;
            --cds-ui-03: #e0e0e0;
            --cds-ui-04: #8d8d8d;
            --cds-ui-05: #161616;
            --cds-interactive-01: #0f62fe;
            --cds-interactive-02: #393939;
            --cds-interactive-03: #0f62fe;
            --cds-interactive-04: #0f62fe;
            --cds-focus: #0f62fe;
            --cds-inverse-01: #ffffff;
            --cds-support-01: #fa4d56;
            --cds-support-02: #42be65;
            --cds-support-03: #f1c21b;
            --cds-support-04: #4589ff;
            --cds-overlay-01: rgba(23, 23, 23, 0.7);
        }

        /* Dark Mode Variables */
        [data-theme="dark"] {
            --cds-ui-background: #161616;
            --cds-text-01: #f4f4f4;
            --cds-text-02: #c6c6c6;
            --cds-ui-01: #262626;
            --cds-ui-03: #393939;
            --cds-ui-04: #6f6f6f;
            --cds-ui-05: #f4f4f4;
            --cds-interactive-01: #4589ff;
            --cds-interactive-02: #c6c6c6;
            --cds-interactive-03: #4589ff;
            --cds-interactive-04: #4589ff;
            --cds-overlay-01: rgba(23, 23, 23, 0.9);
        }

        /* Base Styles */
        body {
            font-family: 'IBM Plex Sans', Arial, sans-serif;
            background-color: var(--cds-ui-background);
            color: var(--cds-text-01);
            margin: 0;
            padding: 0;
            line-height: 1.5;
            transition: background-color 0.3s ease, color 0.3s ease;
            scroll-behavior: smooth;
        }

        p {
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 1.5rem;
            color: var(--cds-text-01);
        }
        
        .text-emphasis {
            font-weight: 500;
            color: var(--cds-text-01);
        }
        
        .section-description {
            margin-bottom: 2rem;
            font-size: 1.125rem;
            line-height: 1.7;
        }
        
        /* Service Items */
        .service-item {
            margin-bottom: 1.5rem;
            display: flex;
            align-items: flex-start;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            padding: 1rem;
            border-radius: 4px;
        }
        
        .service-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            background-color: rgba(15, 98, 254, 0.05);
        }
        
        .service-item .icon {
            margin-right: 1rem;
            color: var(--cds-interactive-01);
            flex-shrink: 0;
            transition: transform 0.3s ease;
        }

        .service-item:hover .icon {
            transform: scale(1.2);
        }
        
        .service-item .content {
            flex: 1;
        }
        
        .service-item .title {
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: var(--cds-text-01);
        }
        
        .service-item .description {
            color: var(--cds-text-02);
            font-size: 0.875rem;
        }
        
        /* Stats Highlights */
        .stat-highlight {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 2rem 0;
            padding: 1.5rem;
            background-color: rgba(15, 98, 254, 0.05);
            border-left: 4px solid var(--cds-interactive-01);
            border-radius: 4px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .stat-highlight:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
        
        .stat-number {
            font-size: 2.5rem;
            font-weight: 300;
            color: var(--cds-interactive-01);
            margin-right: 1.5rem;
            transition: transform 0.3s ease;
        }
        
        .stat-highlight:hover .stat-number {
            transform: scale(1.1);
        }
        
        .stat-description {
            font-size: 1rem;
            color: var(--cds-text-01);
        }
        
        /* Tile Components */
        .bx--tile {
            background: var(--cds-ui-01);
            border: 1px solid var(--cds-ui-03);
            margin-bottom: 2rem;
            padding: 2rem;
            position: relative;
            transition: all 0.3s ease;
            height: 100%;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
            border-radius: 4px;
        }
        
        h2 {
            font-size: 1.75rem;
            margin-bottom: 1.5rem;
            color: var(--cds-text-01);
            font-weight: 400;
        }

        h3 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
            margin-top: 2rem;
            color: var(--cds-text-02);
            font-weight: 400;
        }
        
        .bx--list--unordered li::before {
            background-color: var(--cds-interactive-01);
        }
        
        .bx--list--checked li::before {
            color: var(--cds-support-02);
        }

        .bx--tile:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        /* Header Section */
        .skunkworks-header {
            background-color: var(--cds-interactive-01);
            color: var(--cds-inverse-01);
            padding: 3rem 2rem;
            margin-bottom: 3rem;
            border-radius: 4px;
            text-align: center;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            position: relative;
            overflow: hidden;
        }
        
        .skunkworks-header::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(0,97,254,0.7) 0%, rgba(0,97,254,0) 50%);
            z-index: 1;
        }
        
        .skunkworks-header h1, .skunkworks-header h2 {
            position: relative;
            z-index: 2;
        }
        
        /* Tags */
        .bx--tag {
            display: inline-flex;
            align-items: center;
            padding: 0.25rem 0.75rem;
            border-radius: 15px;
            font-size: 0.75rem;
            font-weight: 400;
            margin-right: 0.75rem;
            margin-bottom: 0.75rem;
            transition: all 0.3s ease;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .bx--tag:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }
        
        .tags-container {
            margin-top: 1.5rem;
            display: flex;
            flex-wrap: wrap;
        }
        
        /* Tag Colors */
        .bx--tag--blue {
            background: linear-gradient(135deg, #0f62fe, #054ada);
            color: var(--cds-inverse-01);
        }
        
        .bx--tag--green {
            background: linear-gradient(135deg, #42be65, #24a148);
            color: var(--cds-inverse-01);
        }
        
        .bx--tag--purple {
            background: linear-gradient(135deg, #8a3ffc, #6929c4);
            color: var(--cds-inverse-01);
        }
        
        .bx--tag--teal {
            background: linear-gradient(135deg, #009d9a, #007d79);
            color: var(--cds-inverse-01);
        }

        /* Typography */
        h1, h2, h3, h4 {
            font-weight: 400;
            margin-top: 0;
        }

        h1 {
            font-size: 2.625rem;
            font-weight: 300;
        }

        h2 {
            font-size: 1.75rem;
            margin-bottom: 1.5rem;
            color: var(--cds-text-01);
        }

        h3 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
            margin-top: 2rem;
            color: var(--cds-text-02);
        }
        
        h2:first-child, h3:first-child {
            margin-top: 0;
        }

        /* Lists */
        .bx--list--unordered {
            list-style: none;
            padding-left: 0;
            margin-top: 1.25rem;
            margin-bottom: 1.5rem;
        }

        .bx--list--unordered li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 1rem;
            line-height: 1.5;
        }

        .bx--list--unordered li::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0.55rem;
            width: 0.5rem;
            height: 0.5rem;
            background-color: var(--cds-interactive-01);
            border-radius: 50%;
        }

        .bx--list--checked {
            list-style: none;
            padding-left: 0;
            margin-top: 1.5rem;
            margin-bottom: 0;
        }

        .bx--list--checked li {
            position: relative;
            padding-left: 1.75rem;
            margin-bottom: 1rem;
            line-height: 1.5;
        }

        .bx--list--checked li::before {
            content: '✓';
            position: absolute;
            left: 0;
            top: 0;
            color: var(--cds-support-02);
            font-weight: bold;
        }
        
        .bx--list--checked li:last-child,
        .bx--list--unordered li:last-child {
            margin-bottom: 0;
        }

        /* Icons */
        .section-icon {
            display: inline-block;
            margin-right: 0.5rem;
            vertical-align: middle;
            color: var(--cds-interactive-01);
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.6; }
            100% { opacity: 1; }
        }
        
        /* Buttons */
        .bx--btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 3rem;
            padding: 0 1rem;
            border-radius: 0;
            font-size: 0.875rem;
            font-weight: 400;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            z-index: 1;
        }
        
        .bx--btn--primary {
            background-color: var(--cds-interactive-01);
            color: var(--cds-inverse-01);
            border: none;
            border-radius: 4px;
        }
        
        .bx--btn--primary::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.1);
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.3s ease;
            z-index: -1;
        }
        
        .bx--btn--primary:hover {
            background-color: #0353e9;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .bx--btn--primary:hover::after {
            transform: scaleX(1);
            transform-origin: left;
        }

        .bx--btn--tertiary {
            background-color: transparent;
            color: var(--cds-interactive-03);
            border: 1px solid var(--cds-interactive-03);
            border-radius: 4px;
        }

        .bx--btn--tertiary:hover {
            background-color: #0353e9;
            color: var(--cds-inverse-01);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        /* Progress/Next Steps */
        .progress-indicator {
            margin-bottom: 0.75rem;
            color: var(--cds-support-02);
            font-weight: bold;
            font-size: 0.875rem;
            letter-spacing: 0.1rem;
        }

        .next-steps-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 2rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid var(--cds-ui-03);
            transition: transform 0.3s ease;
        }
        
        .next-steps-item:hover {
            transform: translateX(10px);
        }
        
        .next-steps-item:last-child {
            margin-bottom: 0;
            padding-bottom: 0;
            border-bottom: none;
        }

        .next-steps-item .icon {
            margin-right: 1.5rem;
            color: var(--cds-interactive-01);
            flex-shrink: 0;
            padding-top: 0.25rem;
        }

        /* Navigation */
        .main-navigation {
            background-color: var(--cds-ui-01);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
            transition: all 0.3s ease;
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .nav-logo {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--cds-interactive-01);
            text-decoration: none;
            display: flex;
            align-items: center;
        }

        .nav-logo svg {
            margin-right: 0.5rem;
            height: 2rem;
            width: 2rem;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
        }

        .nav-link {
            color: var(--cds-text-01);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
            position: relative;
        }

        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--cds-interactive-01);
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .nav-link:hover {
            color: var(--cds-interactive-01);
        }

        .nav-link:hover::after {
            transform: scaleX(1);
        }

        .nav-actions {
            display: flex;
            gap: 1rem;
            align-items: center;
        }

        .theme-toggle {
            background: none;
            border: none;
            cursor: pointer;
            color: var(--cds-text-01);
            font-size: 1.2rem;
            padding: 0.5rem;
            border-radius: 50%;
            transition: background-color 0.3s ease;
        }

        .theme-toggle:hover {
            background-color: var(--cds-ui-03);
        }

        .mobile-menu-toggle {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            color: var(--cds-text-01);
            font-size: 1.5rem;
        }

        /* Mobile Navigation */
        .mobile-nav {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--cds-overlay-01);
            z-index: 2000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .mobile-nav.active {
            opacity: 1;
        }

        .mobile-nav-content {
            position: absolute;
            top: 0;
            right: 0;
            width: 80%;
            max-width: 300px;
            height: 100%;
            background-color: var(--cds-ui-01);
            padding: 2rem;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .mobile-nav.active .mobile-nav-content {
            transform: translateX(0);
        }

        .mobile-nav-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            cursor: pointer;
            color: var(--cds-text-01);
            font-size: 1.5rem;
        }

        .mobile-nav-links {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .mobile-nav-link {
            color: var(--cds-text-01);
            text-decoration: none;
            font-weight: 500;
            font-size: 1.25rem;
            transition: color 0.3s ease;
        }

        .mobile-nav-link:hover {
            color: var(--cds-interactive-01);
        }

        /* Back to Top Button */
        .back-to-top {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background-color: var(--cds-interactive-01);
            color: var(--cds-inverse-01);
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
            z-index: 999;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .back-to-top.visible {
            opacity: 1;
            transform: translateY(0);
        }

        .back-to-top:hover {
            background-color: #0353e9;
        }

        /* Contact Form */
        .contact-form {
            max-width: 600px;
            margin: 0 auto;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: var(--cds-text-01);
        }

        .form-control {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid var(--cds-ui-03);
            border-radius: 4px;
            background-color: var(--cds-ui-01);
            color: var(--cds-text-01);
            transition: border-color 0.3s ease;
        }

        .form-control:focus {
            outline: none;
            border-color: var(--cds-interactive-01);
            box-shadow: 0 0 0 3px rgba(15, 98, 254, 0.1);
        }

        textarea.form-control {
            min-height: 150px;
            resize: vertical;
        }

        /* Testimonials */
        .testimonials-section {
            padding: 3rem 0;
        }

        .testimonial-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
        }

        .testimonial-card {
            background-color: var(--cds-ui-01);
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .testimonial-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .testimonial-content {
            font-style: italic;
            margin-bottom: 1.5rem;
            position: relative;
        }

        .testimonial-content::before {
            content: '"';
            font-size: 4rem;
            position: absolute;
            left: -1rem;
            top: -2rem;
            color: var(--cds-ui-03);
            opacity: 0.5;
        }

        .testimonial-author {
            display: flex;
            align-items: center;
        }

        .testimonial-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 1rem;
            background-color: var(--cds-ui-03);
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--cds-text-01);
            font-weight: bold;
        }

        .testimonial-info {
            flex: 1;
        }

        .testimonial-name {
            font-weight: 600;
            margin-bottom: 0.25rem;
        }

        .testimonial-position {
            font-size: 0.875rem;
            color: var(--cds-text-02);
        }

        /* Case Studies */
        .case-studies-section {
            padding: 3rem 0;
        }

        .case-study-card {
            display: flex;
            flex-direction: column;
            background-color: var(--cds-ui-01);
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            height: 100%;
        }

        .case-study-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .case-study-image {
            height: 200px;
            background-color: var(--cds-ui-03);
            background-size: cover;
            background-position: center;
        }

        .case-study-content {
            padding: 1.5rem;
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .case-study-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
        }

        .case-study-description {
            margin-bottom: 1.5rem;
            flex: 1;
        }

        .case-study-results {
            display: flex;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .case-study-result {
            flex: 1;
            text-align: center;
        }

        .result-number {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--cds-interactive-01);
            margin-bottom: 0.25rem;
        }

        .result-label {
            font-size: 0.875rem;
            color: var(--cds-text-02);
        }

        /* Services Accordion */
        .accordion {
            margin-bottom: 2rem;
        }

        .accordion-item {
            border: 1px solid var(--cds-ui-03);
            border-radius: 4px;
            overflow: hidden;
            margin-bottom: 1rem;
        }

        .accordion-header {
            background-color: var(--cds-ui-01);
            padding: 1rem 1.5rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background-color 0.3s ease;
        }

        .accordion-header:hover {
            background-color: rgba(15, 98, 254, 0.05);
        }

        .accordion-title {
            font-weight: 600;
            font-size: 1.125rem;
            color: var(--cds-text-01);
        }

        .accordion-icon {
            color: var(--cds-interactive-01);
            transition: transform 0.3s ease;
        }

        .accordion-content {
            padding: 0 1.5rem;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease, padding 0.3s ease;
        }

        .accordion-item.active .accordion-icon {
            transform: rotate(180deg);
        }

        .accordion-item.active .accordion-content {
            max-height: 500px;
            padding: 1.5rem;
        }

        /* Team Section */
        .team-section {
            padding: 3rem 0;
        }

        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 2rem;
        }

        .team-card {
            background-color: var(--cds-ui-01);
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .team-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .team-avatar {
            height: 250px;
            background-color: var(--cds-ui-03);
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
        }

        .team-avatar img {
            max-width: 100%;
            height: auto;
            transition: transform 0.3s ease;
        }

        .team-card:hover .team-avatar img {
            transform: scale(1.05);
        }

        .team-info {
            padding: 1.5rem;
            text-align: center;
        }

        .team-name {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .team-position {
            font-size: 0.875rem;
            color: var(--cds-text-02);
            margin-bottom: 1rem;
        }

        .team-bio {
            margin-bottom: 1.5rem;
            font-size: 0.875rem;
        }

        .team-social {
            display: flex;
            justify-content: center;
            gap: 1rem;
        }

        .social-link {
            color: var(--cds-text-02);
            transition: color 0.3s ease;
        }

        .social-link:hover {
            color: var(--cds-interactive-01);
        }

        /* FAQ Section */
        .faq-section {
            padding: 3rem 0;
        }

        /* Data Visualization */
        .chart-container {
            height: 300px;
            margin-top: 2rem;
            margin-bottom: 2rem;
        }

        /* Footer */
        .bx--footer {
            background-color: var(--cds-ui-05);
            color: var(--cds-inverse-01);
            padding: 3rem 0 1.5rem;
            margin-top: 3rem;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .footer-column {
            display: flex;
            flex-direction: column;
        }

        .footer-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: var(--cds-inverse-01);
        }

        .footer-links {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }

        .footer-link {
            color: var(--cds-ui-03);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .footer-link:hover {
            color: var(--cds-inverse-01);
        }

        .footer-social {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
        }

        .footer-social-link {
            color: var(--cds-inverse-01);
            background-color: rgba(255, 255, 255, 0.1);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: background-color 0.3s ease;
        }

        .footer-social-link:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }

        .footer-bottom {
            max-width: 1200px;
            margin: 3rem auto 0;
            padding: 1.5rem 2rem 0;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: space-between;
            color: var(--cds-ui-03);
            font-size: 0.875rem;
        }

        /* Modal Dialog */
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--cds-overlay-01);
            z-index: 2000;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .modal.active {
            opacity: 1;
            visibility: visible;
        }

        .modal-content {
            background-color: var(--cds-ui-01);
            padding: 2rem;
            border-radius: 8px;
            max-width: 600px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            transform: translateY(20px);
            transition: transform 0.3s ease;
            position: relative;
        }

        .modal.active .modal-content {
            transform: translateY(0);
        }

        .modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            cursor: pointer;
            color: var(--cds-text-01);
            font-size: 1.5rem;
        }

        .modal-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
        }

        /* Cookie Consent */
        .cookie-consent {
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--cds-ui-01);
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
            z-index: 1500;
            display: flex;
            align-items: center;
            gap: 1.5rem;
            max-width: 900px;
            width: calc(100% - 4rem);
        }

        .cookie-text {
            flex: 1;
        }

        .cookie-actions {
            display: flex;
            gap: 1rem;
        }

        /* Loading Indicator */
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--cds-overlay-01);
            z-index: 3000;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 1;
            visibility: visible;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .loading-overlay.loaded {
            opacity: 0;
            visibility: hidden;
        }

        .loader {
            border: 4px solid rgba(255, 255, 255, 0.1);
            border-left-color: var(--cds-interactive-01);
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Notifications */
        .notification {
            position: fixed;
            top: 2rem;
            right: 2rem;
            background-color: var(--cds-ui-01);
            padding:.75rem 1.5rem;
            border-radius: 4px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            gap: 1rem;
            transform: translateX(120%);
            transition: transform 0.3s ease;
            z-index: 2000;
            max-width: 400px;
        }

        .notification.show {
            transform: translateX(0);
        }

        .notification-icon {
            font-size: 1.5rem;
        }

        .notification-success .notification-icon {
            color: var(--cds-support-02);
        }

        .notification-error .notification-icon {
            color: var(--cds-support-01);
        }

        .notification-info .notification-icon {
            color: var(--cds-support-04);
        }

        .notification-content {
            flex: 1;
        }

        .notification-title {
            font-weight: 600;
            margin-bottom: 0.25rem;
        }

        .notification-message {
            font-size: 0.875rem;
            color: var(--cds-text-02);
        }

        .notification-close {
            background: none;
            border: none;
            cursor: pointer;
            color: var(--cds-text-01);
            font-size: 1rem;
        }

        /* Counters for Animation */
        .counter-animation {
            display: inline-block;
            font-weight: 600;
            color: var(--cds-interactive-01);
        }

        /* Services Cards (Enhanced) */
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .service-card {
            background-color: var(--cds-ui-01);
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            position: relative;
        }

        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, var(--cds-interactive-01), var(--cds-support-04));
        }

        .service-card-icon {
            width: 60px;
            height: 60px;
            background-color: rgba(15, 98, 254, 0.1);
            color: var(--cds-interactive-01);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.75rem;
            border-radius: 50%;
            margin: 2rem auto 1rem;
            transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .service-card:hover .service-card-icon {
            transform: scale(1.1);
            background-color: var(--cds-interactive-01);
            color: var(--cds-inverse-01);
        }

        .service-card-content {
            padding: 1.5rem;
            text-align: center;
        }

        .service-card-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }

        .service-card-description {
            margin-bottom: 1.5rem;
            color: var(--cds-text-02);
        }

        /* Process Steps */
        .process-steps {
            position: relative;
            padding: 2rem 0;
        }

        .process-line {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 4px;
            background-color: var(--cds-ui-03);
            transform: translateX(-50%);
        }

        .process-step {
            display: flex;
            margin-bottom: 3rem;
            position: relative;
            z-index: 1;
        }

        .process-step:nth-child(even) {
            flex-direction: row-reverse;
        }

        .process-step:last-child {
            margin-bottom: 0;
        }

        .process-step-content {
            width: 45%;
            background-color: var(--cds-ui-01);
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .process-step:hover .process-step-content {
            transform: translateY(-5px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .process-step-number {
            width: 60px;
            height: 60px;
            background-color: var(--cds-interactive-01);
            color: var(--cds-inverse-01);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem;
            font-weight: 600;
            margin: 2rem auto;
            position: relative;
            z-index: 2;
            transition: transform 0.3s ease;
        }

        .process-step:hover .process-step-number {
            transform: scale(1.1);
        }

        .process-step-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }

        .process-step-description {
            margin-bottom: 1.5rem;
        }

        /* Stats Counter Section */
        .stats-section {
            padding: 4rem 0;
            background-color: rgba(15, 98, 254, 0.05);
            text-align: center;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 3rem auto 0;
            padding: 0 2rem;
        }

        .stat-item {
            padding: 2rem;
            background-color: var(--cds-ui-01);
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .stat-value {
            font-size: 3rem;
            font-weight: 300;
            color: var(--cds-interactive-01);
            margin-bottom: 1rem;
        }

        .stat-label {
            font-size: 1.125rem;
            color: var(--cds-text-02);
        }

        /* Responsive Media Queries */
        @media (max-width: 1200px) {
            .footer-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        @media (max-width: 1056px) {
            .bx--grid {
                padding: 2rem 1rem;
            }
            
            .skunkworks-header {
                padding: 2rem 1.5rem;
            }
            
            h1 {
                font-size: 2.25rem;
            }
            
            h2 {
                font-size: 1.5rem;
            }
            
            .skunkworks-logo {
                max-width: 80%;
            }

            .process-line {
                left: 2rem;
            }

            .process-step {
                flex-direction: column-reverse !important;
                margin-left: 4rem;
            }

            .process-step-content {
                width: 100%;
            }

            .process-step-number {
                position: absolute;
                top: 0;
                left: -4rem;
                margin: 0;
            }

            .footer-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (max-width: 768px) {
            .nav-links, .nav-actions .bx--btn {
                display: none;
            }

            .mobile-menu-toggle {
                display: block;
            }

            .mobile-nav {
                display: block;
            }

            .testimonial-grid, .case-studies-grid, .team-grid, .services-grid {
                grid-template-columns: 1fr;
            }

            .stats-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 672px) {
            .bx--grid {
                padding: 1.5rem 1rem;
            }
            
            .skunkworks-header {
                padding: 2rem 1rem;
                margin-bottom: 2rem;
            }
            
            h1 {
                font-size: 1.75rem;
            }
            
            h2 {
                font-size: 1.25rem;
            }
            
            .bx--tile {
                padding: 1.5rem;
            }
            
            .skunkworks-logo {
                max-width: 100%;
            }
            
            .next-steps-item .icon {
                margin-right: 1rem;
            }
            
            .bx--btn {
                width: 100%;
                margin-bottom: 1rem;
            }
            
            .bx--btn + .bx--btn {
                margin-left: 0 !important;
            }
            
            .action-buttons {
                flex-direction: column;
            }

            .stats-grid {
                grid-template-columns: 1fr;
            }

            .footer-grid {
                grid-template-columns: 1fr;
            }

            .footer-bottom {
                flex-direction: column;
                gap: 1rem;
                text-align: center;
            }

            .cookie-consent {
                flex-direction: column;
                padding: 1rem;
            }

            .notification {
                left: 1rem;
                right: 1rem;
                transform: translateY(-100%);
            }

            .notification.show {
                transform: translateY(0);
            }
        }
        
        @media (max-width: 320px) {
            .bx--grid {
                padding: 1rem 0.5rem;
            }
            
            .skunkworks-header {
                padding: 1.5rem 0.75rem;
            }
            
            .bx--tile {
                padding: 1rem;
            }
            
            h1 {
                font-size: 1.5rem;
            }
            
            h2 {
                font-size: 1.125rem;
            }
        }
        
        /* Cross-browser compatibility */
        @supports (-ms-ime-align: auto) {
            /* Edge-specific fixes */
            .bx--tag {
                display: inline-block;
            }
        }
        
        @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
            /* IE11 fixes */
            .bx--grid {
                display: block;
            }
            
            .bx--row {
                display: block;
                margin-left: -1rem;
                margin-right: -1rem;
            }
            
            .bx--col-lg-6 {
                display: inline-block;
                width: 50%;
                padding-left: 1rem;
                padding-right: 1rem;
            }
            
            .bx--col-lg-12 {
                display: block;
                width: 100%;
                padding-left: 1rem;
                padding-right: 1rem;
            }
        }
        
        /* Print styles */
        @media print {
            body {
                background-color: #ffffff;
            }
            
            .bx--tile {
                box-shadow: none;
                border: 1px solid #000000;
            }
            
            .bx--tag {
                border: 1px solid #000000;
                background: none !important;
                color: #000000 !important;
            }
            
            .skunkworks-header {
                background: #ffffff !important;
                color: #000000;
                border: 1px solid #000000;
            }
            
            .skunkworks-header h1, .skunkworks-header h2 {
                color: #000000;
            }
            
            .bx--footer {
                border-top: 1px solid #000000;
            }

            .main-navigation, .back-to-top, .cookie-consent {
                display: none !important;
            }
        }
        
        /* Accessibility enhancements */
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
        
        :focus {
            outline: 2px solid var(--cds-focus);
            outline-offset: 2px;
        }
        
        .skunkworks-logo {
            max-width: 500px;
            margin: 0 auto;
            display: block;
        }

        /* Skip Link for Accessibility */
        .skip-link {
            position: absolute;
            top: -40px;
            left: 0;
            background-color: var(--cds-interactive-01);
            color: var(--cds-inverse-01);
            padding: 8px 16px;
            z-index: 9999;
            transition: top 0.3s ease;
        }

        .skip-link:focus {
            top: 0;
        }
    </style>
</head>
<script>
 document.addEventListener('DOMContentLoaded', function () {
    // ===== Show Success Notification if ?sent=1 in URL =====
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('sent') === '1') {
        const notification = document.getElementById('form-notification');
        if (notification) {
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
            }, 5000);
        }
    }

    // ===== Loading Overlay =====
    setTimeout(() => {
        const overlay = document.querySelector('.loading-overlay');
        if (overlay) overlay.classList.add('loaded');
    }, 800);

    // ===== Mobile Menu Toggle =====
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavClose = document.querySelector('.mobile-nav-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => mobileNav.classList.add('active'));
    }
    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', () => mobileNav.classList.remove('active'));
    }
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => mobileNav.classList.remove('active'));
    });

    // ===== Accordion =====
    document.querySelectorAll('.accordion-item').forEach(item => {
        const header = item.querySelector('.accordion-header');
        if (header) {
            header.addEventListener('click', () => item.classList.toggle('active'));
        }
    });

    // ===== Back to Top Button =====
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // ===== Smooth Anchor Scroll =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Theme Toggle =====
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.body.setAttribute('data-theme', newTheme);
            themeIcon.classList.toggle('fa-moon');
            themeIcon.classList.toggle('fa-sun');
            localStorage.setItem('theme', newTheme);
        });

        // Apply saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.setAttribute('data-theme', savedTheme);
            if (savedTheme === 'dark') {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
        }
    }

    // ===== Modal Triggers =====
    document.querySelectorAll('.service-modal-trigger').forEach(trigger => {
        trigger.addEventListener('click', function () {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) modal.classList.add('active');
        });
    });

    // ===== Modal Close Buttons =====
    document.querySelectorAll('.modal-close').forEach(button => {
        button.addEventListener('click', function () {
            const modal = this.closest('.modal');
            if (modal) modal.classList.remove('active');
        });
    });

    // ===== Close Modal on Outside Click =====
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) modal.classList.remove('active');
        });
    });

    // ===== Notification Close Button =====
    document.querySelectorAll('.notification-close').forEach(button => {
        button.addEventListener('click', function () {
            const notification = this.closest('.notification');
            if (notification) notification.classList.remove('show');
        });
    });

    // ===== Cookie Consent =====
    const cookieConsent = document.getElementById('cookie-consent');
    const cookieAccept = document.getElementById('cookie-accept');
    if (cookieConsent && cookieAccept) {
        if (!localStorage.getItem('cookies-accepted')) {
            cookieConsent.style.display = 'flex';
        }
        cookieAccept.addEventListener('click', () => {
            localStorage.setItem('cookies-accepted', 'true');
            cookieConsent.style.display = 'none';
        });
    }

    // ===== Counter Animation =====
    document.querySelectorAll('.counter').forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'), 10);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        function updateCounter() {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(counter);
    });

    // ===== Mobile Layout Adjustment =====
    function adjustForMobile() {
        const isMobile = window.innerWidth < 672;
        document.querySelectorAll('.action-buttons').forEach(button => {
            button.style.flexDirection = isMobile ? 'column' : 'row';
        });
        document.querySelectorAll('.bx--btn--tertiary').forEach(button => {
            button.style.marginLeft = isMobile ? '0' : '1.5rem';
            button.style.marginTop = isMobile ? '1rem' : '0';
        });
    }
    adjustForMobile();
    window.addEventListener('resize', adjustForMobile);
  });
</script>

<body id="top">
    <!-- Skip Link for Accessibility -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- Loading Overlay -->
    <div class="loading-overlay">
        <div class="loader"></div>
    </div>

    <!-- Navigation Bar -->
    <nav class="main-navigation" aria-label="Main Navigation">
        <div class="nav-container">
            <a href="#top" class="nav-logo">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"></path>
                    <path d="M16,10a6,6,0,1,0,6,6A6,6,0,0,0,16,10Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,16,20Z"></path>
                </svg>
                Skunkworks Digital
            </a>
            <div class="nav-links">
                <a href="#services" class="nav-link">Services</a>
                <a href="#about" class="nav-link">About Us</a>
                <a href="#case-studies" class="nav-link">Case Studies</a>
                <a href="#testimonials" class="nav-link">Testimonials</a>
                <a href="#team" class="nav-link">Our Team</a>
                <a href="#faq" class="nav-link">FAQ</a>
                <a href="#contact" class="nav-link">Contact</a>
            </div>
            <div class="nav-actions">
                <button class="theme-toggle" aria-label="Toggle Dark Mode">
                    <i class="fas fa-moon"></i>
                </button>
                <a href="#contact" class="bx--btn bx--btn--primary">Get Started</a>
                <button class="mobile-menu-toggle" aria-label="Open Menu">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
    </nav>

    <!-- Mobile Navigation -->
    <div class="mobile-nav">
        <div class="mobile-nav-content">
            <button class="mobile-nav-close" aria-label="Close Menu">
                <i class="fas fa-times"></i>
            </button>
            <div class="mobile-nav-links">
                <a href="#services" class="mobile-nav-link">Services</a>
                <a href="#about" class="mobile-nav-link">About Us</a>
                <a href="#case-studies" class="mobile-nav-link">Case Studies</a>
                <a href="#testimonials" class="mobile-nav-link">Testimonials</a>
                <a href="#team" class="mobile-nav-link">Our Team</a>
                <a href="#faq" class="mobile-nav-link">FAQ</a>
                <a href="#contact" class="mobile-nav-link">Contact</a>
            </div>
            <button class="bx--btn bx--btn--primary" style="width: 100%;">Get Started</button>
        </div>
    </div>

    <!-- Main Content -->
    <main id="main-content">
        <!-- Hero Header Section -->
        <div class="bx--grid">
            <div class="bx--row">
                <div class="bx--col-lg-12">
                    <div class="skunkworks-header animate__animated animate__fadeIn">
                        <div class="header-content">
                            <!-- SVG Logo -->
                            <div class="skunkworks-logo animate__animated animate__zoomIn animate__delay-1s">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" width="100%" height="100%">
                                  <!-- Background Elements -->
                                  <defs>
                                    <!-- Gradients -->
                                    <linearGradient id="gradientBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" stop-color="#0f62fe" stop-opacity="1"/>
                                      <stop offset="100%" stop-color="#054ada" stop-opacity="1"/>
                                    </linearGradient>
                                    
                                    <!-- Circuit Pattern -->
                                    <pattern id="circuitPattern" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="scale(0.5) rotate(0)">
                                      <rect width="60" height="60" fill="none"/>
                                      <path d="M10,10 h30 v10 h10 v30" stroke="#0f62fe" stroke-width="1.5" fill="none" stroke-opacity="0.2"/>
                                      <path d="M40,10 v30 h-30" stroke="#0f62fe" stroke-width="1.5" fill="none" stroke-opacity="0.2"/>
                                      <circle cx="10" cy="10" r="3" fill="#0f62fe" fill-opacity="0.3"/>
                                      <circle cx="40" cy="10" r="3" fill="#0f62fe" fill-opacity="0.3"/>
                                      <circle cx="10" cy="40" r="3" fill="#0f62fe" fill-opacity="0.3"/>
                                      <circle cx="40" cy="40" r="3" fill="#0f62fe" fill-opacity="0.3"/>
                                    </pattern>
                                    
                                    <!-- Mask for Text -->
                                    <mask id="textMask">
                                      <rect width="600" height="200" fill="white"/>
                                      <text x="300" y="100" font-family="'IBM Plex Sans', sans-serif" font-weight="700" font-size="60" text-anchor="middle" fill="black">SKUNKWORKS</text>
                                      <text x="300" y="150" font-family="'IBM Plex Sans', sans-serif" font-weight="300" font-size="40" text-anchor="middle" fill="black">DIGITAL</text>
                                    </mask>
                                    
                                    <!-- Filters -->
                                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                      <feGaussianBlur stdDeviation="3" result="blur"/>
                                      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                                    </filter>
                                  </defs>
                                  
                                  <!-- Main Background with Pattern -->
                                  <rect width="600" height="200" fill="#f4f4f4"/>
                                  <rect width="600" height="200" fill="url(#circuitPattern)"/>
                                  
                                  <!-- Decorative Elements - Geometric Shapes -->
                                  <circle cx="100" cy="100" r="80" fill="none" stroke="url(#gradientBlue)" stroke-width="2" opacity="0.7"/>
                                  <circle cx="500" cy="100" r="80" fill="none" stroke="url(#gradientBlue)" stroke-width="2" opacity="0.7"/>
                                  
                                  <!-- Technology-inspired design elements -->
                                  <path d="M50,50 L150,50 L150,150 L50,150 Z" fill="none" stroke="#0f62fe" stroke-width="1.5" stroke-dasharray="5,5" opacity="0.6"/>
                                  <path d="M450,50 L550,50 L550,150 L450,150 Z" fill="none" stroke="#0f62fe" stroke-width="1.5" stroke-dasharray="5,5" opacity="0.6"/>
                                  
                                  <!-- Dynamic Connection Lines -->
                                  <line x1="150" y1="100" x2="450" y2="100" stroke="#0f62fe" stroke-width="2" stroke-dasharray="10,5" opacity="0.8"/>
                                  <circle cx="150" cy="100" r="5" fill="#0f62fe"/>
                                  <circle cx="450" cy="100" r="5" fill="#0f62fe"/>
                                  <circle cx="300" cy="100" r="8" fill="#0f62fe" filter="url(#glow)"/>
                                  
                                  <!-- Main Text Group with Stylized Effect -->
                                  <g filter="url(#glow)">
                                    <!-- Text Shadow -->
                                    <text x="303" y="103" font-family="'IBM Plex Sans', sans-serif" font-weight="700" font-size="60" text-anchor="middle" fill="#0f62fe" opacity="0.3">SKUNKWORKS</text>
                                    <text x="303" y="153" font-family="'IBM Plex Sans', sans-serif" font-weight="300" font-size="40" text-anchor="middle" fill="#0f62fe" opacity="0.3">DIGITAL</text>
                                    
                                    <!-- Main Text -->
                                    <text x="300" y="100" font-family="'IBM Plex Sans', sans-serif" font-weight="700" font-size="60" text-anchor="middle" fill="#0f62fe">SKUNKWORKS</text>
                                    <text x="300" y="150" font-family="'IBM Plex Sans', sans-serif" font-weight="300" font-size="40" text-anchor="middle" fill="#0f62fe">DIGITAL</text>
                                  </g>
                                  
                                  <!-- Overlay with Mask for Visual Interest -->
                                  <rect width="600" height="200" fill="url(#gradientBlue)" opacity="0.05" mask="url(#textMask)"/>
                                  
                                  <!-- Additional Tech-inspired Decorative Elements -->
                                  <path d="M240,40 L260,40 L260,45 L240,45 Z" fill="#0f62fe" opacity="0.8"/>
                                  <path d="M270,40 L290,40 L290,45 L270,45 Z" fill="#0f62fe" opacity="0.8"/>
                                  <path d="M300,40 L320,40 L320,45 L300,45 Z" fill="#0f62fe" opacity="0.8"/>
                                  <path d="M330,40 L350,40 L350,45 L330,45 Z" fill="#0f62fe" opacity="0.8"/>
                                  
                                  <!-- Digital Wave Effect -->
                                  <path d="M50,180 C100,160 150,190 200,170 C250,150 300,190 350,170 C400,150 450,190 500,170 L500,200 L50,200 Z" fill="url(#gradientBlue)" opacity="0.1"/>
                                </svg>
                            </div>
                            <h1 class="animate__animated animate__fadeInUp animate__delay-1s">Transforming Businesses Through Digital Innovation</h1>
                            <h2 class="animate__animated animate__fadeInUp animate__delay-1s">Empowering businesses of all sizes to establish, expand, and optimize their digital presence in today's competitive marketplace</h2>
                            <div class="action-buttons" style="display: flex; justify-content: center; margin-top: 2rem;">
                                <a href="#services" class="bx--btn bx--btn--primary animate__animated animate__pulse animate__delay-2s animate__repeat-2">Explore Our Services</a>
                                <a href="#contact" class="bx--btn bx--btn--tertiary" style="margin-left: 1.5rem;">Contact Us Today</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Stats Counter Section -->
        <section class="stats-section">
            <div class="bx--grid">
                <div class="bx--row">
                    <div class="bx--col-lg-12">
                        <h2>Our Impact At A Glance</h2>
                        <p>Since 2020, we've helped businesses achieve measurable results through strategic digital solutions.</p>
                        
                        <div class="stats-grid">
                            <div class="stat-item">
                                <div class="stat-value counter" data-count="250">0</div>
                                <div class="stat-label">Successful Projects</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value counter" data-count="92">0</div>
                                <div class="stat-label">Client Retention Rate (%)</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value counter" data-count="37">0</div>
                                <div class="stat-label">Avg. Conversion Rate Increase (%)</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-value counter" data-count="12">0</div>
                                <div class="stat-label">Industries Served</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    

    <!-- Back to Top Button -->
    <a href="#top" class="back-to-top" aria-label="Back to Top">
        <i class="fas fa-arrow-up"></i>
    </a>

    <!-- Cookie Consent -->
    <div class="cookie-consent" id="cookie-consent">
        <div class="cookie-text">
            <p><strong>We use cookies</strong> to enhance your experience on our website. By continuing to browse, you agree to our <a href="#">Cookie Policy</a>.</p>
        </div>
        <div class="cookie-actions">
            <button class="bx--btn bx--btn--tertiary" id="cookie-settings">Cookie Settings</button>
            <button class="bx--btn bx--btn--primary" id="cookie-accept">Accept All</button>
        </div>
    </div>

    <!-- Service Modals -->
    <div class="modal" id="ecommerce-modal">
        <div class="modal-content">
            <button class="modal-close" aria-label="Close Modal"><i class="fas fa-times"></i></button>
            <h2 class="modal-title">E-commerce Development</h2>
            <p>Our e-commerce solutions are designed to help businesses sell their products and services online effectively. We create custom online stores that are visually appealing, user-friendly, and optimized for conversions.</p>
            <h3>Key Features:</h3>
            <ul class="bx--list--unordered">
                <li>Custom e-commerce website design and development</li>
                <li>Product catalog and inventory management</li>
                <li>Secure payment gateway integration</li>
                <li>Mobile-responsive shopping experience</li>
                <li>Customer account management</li>
                <li>Order tracking and fulfillment integration</li>
                <li>Shipping and tax calculation setup</li>
                <li>Product search and filtering functionality</li>
                <li>Abandoned cart recovery</li>
            </ul>
            <h3>Platforms We Work With:</h3>
            <ul class="bx--list--unordered">
                <li>Shopify</li>
                <li>WooCommerce</li>
                <li>Magento</li>
                <li>BigCommerce</li>
                <li>Custom solutions</li>
            </ul>
            <button class="bx--btn bx--btn--primary" onclick="window.location.href='#contact'">Get Started</button>
        </div>
    </div>

    <!-- Notification -->
    <div class="notification notification-success" id="form-notification">
        <div class="notification-icon"><i class="fas fa-check-circle"></i></div>
        <div class="notification-content">
            <div class="notification-title">Message Sent!</div>
            <div class="notification-message">Thank you for contacting us. We'll get back to you shortly.</div>
        </div>
        <button class="notification-close" aria-label="Close Notification"><i class="fas fa-times"></i></button>
    </div>

    <!-- Scripts -->
    <script>
        // Wait for DOM to be fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Loading Overlay
            setTimeout(function() {
                document.querySelector('.loading-overlay').classList.add('loaded');
            }, 800);
            
            // Mobile Menu Toggle
            const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
            const mobileNav = document.querySelector('.mobile-nav');
            const mobileNavClose = document.querySelector('.mobile-nav-close');
            const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
            
            if (mobileMenuToggle) {
                mobileMenuToggle.addEventListener('click', function() {
                    mobileNav.classList.add('active');
                });
            }
            
            if (mobileNavClose) {
                mobileNavClose.addEventListener('click', function() {
                    mobileNav.classList.remove('active');
                });
            }
            
            mobileNavLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    mobileNav.classList.remove('active');
                });
            });
            
            // Accordion
            const accordionItems = document.querySelectorAll('.accordion-item');
            
            accordionItems.forEach(function(item) {
                const header = item.querySelector('.accordion-header');
                
                header.addEventListener('click', function() {
                    item.classList.toggle('active');
                });
            });
            
            // Back to Top Button
            const backToTopButton = document.querySelector('.back-to-top');
            
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('visible');
                } else {
                    backToTopButton.classList.remove('visible');
                }
            });
            
            // Smooth Scrolling for Anchor Links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Theme Toggle
            const themeToggle = document.querySelector('.theme-toggle');
            const themeIcon = themeToggle.querySelector('i');
            
            themeToggle.addEventListener('click', function() {
                document.body.setAttribute('data-theme', 
                    document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
                );
                
                themeIcon.classList.toggle('fa-moon');
                themeIcon.classList.toggle('fa-sun');
                
                localStorage.setItem('theme', document.body.getAttribute('data-theme'));
            });
            
            // Check for saved theme preference
            const savedTheme = localStorage.getItem('theme');
            
            if (savedTheme) {
                document.body.setAttribute('data-theme', savedTheme);
                
                if (savedTheme === 'dark') {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                }
            }
            
            // Service Modal Triggers
            const serviceModalTriggers = document.querySelectorAll('.service-modal-trigger');
            
            serviceModalTriggers.forEach(function(trigger) {
                trigger.addEventListener('click', function() {
                    const modalId = this.getAttribute('data-modal');
                    const modal = document.getElementById(modalId);
                    
                    if (modal) {
                        modal.classList.add('active');
                    }
                });
            });
            
            // Close Modal
            const modalCloseButtons = document.querySelectorAll('.modal-close');
            const modals = document.querySelectorAll('.modal');
            
            modalCloseButtons.forEach(function(button) {
                button.addEventListener('click', function() {
                    const modal = this.closest('.modal');
                    
                    if (modal) {
                        modal.classList.remove('active');
                    }
                });
            });
            
            // Close Modal on Outside Click
            modals.forEach(function(modal) {
                modal.addEventListener('click', function(e) {
                    if (e.target === modal) {
                        modal.classList.remove('active');
                    }
                });
            });
            
            // Contact Form Submission
            const contactForm = document.querySelector('.contact-form');
            
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Here you would normally handle the form submission via AJAX
                    // For demo purposes, we'll just show a success notification
                    
                    const notification = document.getElementById('form-notification');
                    
                    notification.classList.add('show');
                    
                    setTimeout(function() {
                        notification.classList.remove('show');
                    }, 5000);
                    
                    contactForm.reset();
                });
            }
            
            // Close Notification
            const notificationCloseButtons = document.querySelectorAll('.notification-close');
            
            notificationCloseButtons.forEach(function(button) {
                button.addEventListener('click', function() {
                    const notification = this.closest('.notification');
                    
                    if (notification) {
                        notification.classList.remove('show');
                    }
                });
            });
            
            // Cookie Consent
            const cookieConsent = document.getElementById('cookie-consent');
            const cookieAccept = document.getElementById('cookie-accept');
            
            if (cookieConsent && cookieAccept) {
                // Check if the user has already accepted cookies
                if (!localStorage.getItem('cookies-accepted')) {
                    cookieConsent.style.display = 'flex';
                } else {
                    cookieConsent.style.display = 'none';
                }
                
                cookieAccept.addEventListener('click', function() {
                    localStorage.setItem('cookies-accepted', 'true');
                    cookieConsent.style.display = 'none';
                });
            }
            
            // Counter Animation
            const counters = document.querySelectorAll('.counter');
            
            counters.forEach(function(counter) {
                const target = parseInt(counter.getAttribute('data-count'), 10);
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 60fps
                
                let current = 0;
                
                function updateCounter() {
                    current += step;
                    
                    if (current < target) {
                        counter.textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                }
                
                // Start animation when element is in viewport
                const observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            updateCounter();
                            observer.unobserve(entry.target);
                        }
                    });
                });
                
                observer.observe(counter);
            });
            
            // Responsive Adjustment for Mobile
            function adjustForMobile() {
                if (window.innerWidth < 672) {
                    const buttons = document.querySelectorAll('.action-buttons');
                    buttons.forEach(function(button) {
                        button.style.flexDirection = 'column';
                    });
                    
                    const secondaryButtons = document.querySelectorAll('.bx--btn--tertiary');
                    secondaryButtons.forEach(function(button) {
                        button.style.marginLeft = '0';
                        button.style.marginTop = '1rem';
                    });
                } else {
                    const buttons = document.querySelectorAll('.action-buttons');
                    buttons.forEach(function(button) {
                        button.style.flexDirection = 'row';
                    });
                    
                    const secondaryButtons = document.querySelectorAll('.bx--btn--tertiary');
                    secondaryButtons.forEach(function(button) {
                        button.style.marginLeft = '1.5rem';
                        button.style.marginTop = '0';
                    });
                }
            }
            
            // Initial call and resize event
            adjustForMobile();
            window.addEventListener('resize', adjustForMobile);
        });
    </script>
</body>
</html>

        <!-- Go-To-Market Strategy Section -->
        <section id="go-to-market" class="bx--grid">
            <div class="bx--row">
                <div class="bx--col-lg-12">
                    <div class="bx--tile animate__animated animate__fadeIn">
                        <h2>
                            <svg class="section-icon" width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
                                <path d="M17.5,23.5c0,0.9-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5c0-0.9,0.7-1.5,1.5-1.5S17.5,22.6,17.5,23.5z M16,18 c-0.6,0-1-0.4-1-1V7c0-0.6,0.4-1,1-1s1,0.4,1,1v10C17,17.6,16.6,18,16,18z"></path>
                                <path d="M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14S23.7,2,16,2z M16,28C9.4,28,4,22.6,4,16S9.4,4,16,4 s12,5.4,12,12S22.6,28,16,28z"></path>
                            </svg>
                            Go-To-Market Strategy
                        </h2>
                        
                        <p class="section-description">Our comprehensive go-to-market strategy is designed to position Skunkworks Digital as the preferred digital transformation partner for businesses looking to enhance their online presence. We've identified specific market segments and developed tailored approaches for each.</p>
                        
                        <div class="bx--row">
                            <div class="bx--col-md-5">
                                <h3>Target Market:</h3>
                                <p>We focus on three primary market segments with distinct needs and opportunities:</p>
                                
                                <div class="service-item">
                                    <div class="icon">
                                        <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                                            <path d="M15,19H9v2h6v4l5-5-5-5V19z"></path>
                                            <path d="M25.7,9.3l-7-7C18.5,2.1,18.3,2,18,2H8C6.9,2,6,2.9,6,4v24c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V10 C26,9.7,25.9,9.5,25.7,9.3z M18,4.4l5.6,5.6H18V4.4z M24,28H8V4h8v6c0,1.1,0.9,2,2,2h6V28z"></path>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="title">SMEs & Startups</div>
                                        <div class="description">Businesses with 10-250 employees seeking cost-effective digital solutions with rapid implementation and clear ROI. Typically have limited in-house technical expertise and need strategic guidance alongside implementation.</div>
                                    </div>
                                </div>
                                
                                <div class="service-item">
                                    <div class="icon">
                                        <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                                            <path d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM4,8H28V12H4ZM4,24V16H28v8Z"></path>
                                            <rect x="20" y="20" width="4" height="2"></rect>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="title">E-commerce Businesses</div>
                                        <div class="description">Online retailers across various product categories looking to optimize their shopping experience, increase conversion rates, and expand market reach. These businesses need solutions for inventory management, payment processing, and multichannel selling.</div>
                                    </div>
                                </div>
                                
                                <div class="service-item">
                                    <div class="icon">
                                        <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                                            <path d="M2 26H30V28H2zM25.4 9c.8-.8.8-2 0-2.8 0 0 0 0 0 0l-3.6-3.6c-.8-.8-2-.8-2.8 0 0 0 0 0 0 0l-15 15V24h6.4L25.4 9zM20.4 4L24 7.6l-3 3L17.4 7 20.4 4zM6 22v-3.6l10-10 3.6 3.6-10 10H6z"></path>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="title">Enterprises needing CRM & Automation</div>
                                        <div class="description">Larger organizations seeking to modernize their customer relationship management and implement business process automation to increase efficiency. These clients typically have complex workflows and need custom integrations between multiple systems.</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bx--col-md-7">
                                <h3>Key Channels & Approach:</h3>
                                <p>Our multi-channel strategy ensures we connect with potential clients across various touchpoints:</p>
                                
                                <div class="service-item">
                                    <div class="icon">
                                        <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                                            <path d="M16,18c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S14.9,18,16,18z M16,14c1.1,0,2,0.9,2,2s-0.9,2-2,2s-2-0.9-2-2 S14.9,14,16,14z"></path>
                                            <path d="M16,12c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S18.2,12,16,12z M16,18c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S17.1,18,16,18z"></path>
                                            <path d="M27,12c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S25.9,12,27,12z M27,10c0,0,0,0,0,0C27,10,27,10,27,10C27,10,27,10,27,10 z"></path>
                                            <path d="M2,14v-2h6v2H2z"></path>
                                            <path d="M25,21v3h-8v-3h-2v3c0,1.1,0.9,2,2,2h2v2h-2v2h8v-2h-4v-2h2c1.1,0,2-0.9,2-2v-3H25z"></path>
                                            <path d="M27,26h-2v2h4v-4h-2V26z"></path>
                                            <path d="M11,25H4c-1.1,0-2-0.9-2-2V11h2v12h7V25z"></path>
                                            <path d="M30,15h-2v11c0,1.1-0.9,2-2,2h-5v2h5c2.2,0,4-1.8,4-4V15z"></path>
                                            <path d="M4,9h2V2h22v7h2V2c0-1.1-0.9-2-2-2H6C4.9,0,4,0.9,4,2V9z"></path>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="title">Website & SEO Optimization</div>
                                        <div class="description">Our own website serves as our primary showcase, optimized for organic search traffic with industry-specific landing pages. We employ localized SEO strategies targeting key business regions and specific industry verticals to attract qualified leads through search engines.</div>
                                    </div>
                                </div>
                                
                                <div class="service-item">
                                    <div class="icon">
                                        <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                                            <path d="M26,20.1548V11a1,1,0,0,0-1-1H24V7a7,7,0,0,0-14,0v3H7a1,1,0,0,0-1,1v13a1,1,0,0,0,1,1H25a1,1,0,0,0,1-1V24.1548l4,2V18.1548ZM12,7a5,5,0,0,1,10,0v3H12ZM24,24H8V12H24v8.1548L22,19V15H20v5l4,2Z"></path>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="title">Social Media & Paid Ads</div>
                                        <div class="description">Targeted campaigns on LinkedIn, Facebook, and industry-specific platforms with custom audience segments. We implement retargeting strategies and create industry-specific content that demonstrates our expertise and establishes thought leadership in the digital transformation space.</div>
                                    </div>
                                </div>
                                
                                <div class="service-item">
                                    <div class="icon">
                                        <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                                            <path d="M16,8a4,4,0,1,0,4,4A4,4,0,0,0,16,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,16,14Z"></path>
                                            <path d="M16,2A14,14,0,1,0,30,16,14.0158,14.0158,0,0,0,16,2Zm0,26A12,12,0,0,1,8.63,4.9423l6.37,11.0232,8.1409-6.7841A.9993.9993,0,1,1,24.8591,10.76L16,18.0355,10.0342,7.76A10.0129,10.0129,0,1,0,26,16,9.9036,9.9036,0,0,0,24.5669,10.0591l1.7733-1.478A11.9852,11.9852,0,0,1,16,28Z"></path>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="title">Partnerships with Tech Providers</div>
                                        <div class="description">Strategic alliances with platform providers like Shopify, HubSpot, and WordPress agencies to enable co-marketing and referral opportunities. We participate in partner certification programs and joint webinars to extend our reach and leverage established ecosystems.</div>
                                    </div>
                                </div>
                                
                                <div class="service-item">
                                    <div class="icon">
                                        <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                                            <path d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM4,8H28v3.9985H4ZM4,24V13.9985H28V24Z"></path>
                                            <rect x="22" y="19" width="2" height="2"></rect>
                                            <rect x="18" y="19" width="2" height="2"></rect>
                                            <rect x="14" y="19" width="2" height="2"></rect>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="title">Cold Outreach & Lead Generation</div>
                                        <div class="description">Targeted email campaigns and LinkedIn outreach to decision-makers in our target industries. We create value-first approaches with industry insights and case studies rather than generic sales pitches, focusing on addressing specific pain points identified through market research.</div>
                                    </div>
                                </div>
                                
                                <div class="service-item">
                                    <div class="icon">
                                        <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                                            <path d="M16 10a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0V16A6 6 0 0 0 16 10zm4 14a4 4 0 0 1-8 0V16a4 4 0 0 1 8 0zM27 12h5v2H27zM27 6h5v2H27zM27 18h5v2H27zM0 12H5V14H0zM0 6H5V8H0zM0 18H5V20H0zM9 2H11V7H9zM9 25H11V30H9zM21 2H23V7H21zM21 25H23V30H21z"></path>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        <div class="title">Referral & Affiliate Marketing</div>
                                        <div class="description">Structured referral program with existing clients and industry partners that provides incentives for successful client introductions. We offer tiered commission rates based on project size and lifetime value to encourage high-quality referrals and long-term partnerships.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="stat-highlight">
                            <div class="stat-number">68%</div>
                            <div class="stat-description">Of our new business comes from strategic partnerships and referrals, demonstrating the strength of our relationship-focused approach and client satisfaction.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Our Process Section -->
        <section id="process" class="bx--grid">
            <div class="bx--row">
                <div class="bx--col-lg-12">
                    <div class="bx--tile">
                        <h2>
                            <svg class="section-icon" width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
                                <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"></path>
                                <path d="M20.59,22,15,16.41V7h2v8.58l5,5.01L20.59,22z"></path>
                            </svg>
                            Our Proven Process
                        </h2>
                        <p class="section-description">We follow a structured, collaborative approach to ensure every project delivers maximum value and meets your specific business objectives. Our process is designed to be transparent, efficient, and focused on measurable results.</p>
                        
                        <div class="process-steps">
                            <div class="process-line"></div>
                            
                            <div class="process-step"style="border:2px solid transparent">
                                <div class="process-step-content"style="border:2px solid transparent">
                                    <h3 class="process-step-title">Discovery & Strategy</h3>
                                    <p class="process-step-description">We begin by understanding your business goals, target audience, and competitive landscape. Through collaborative workshops and in-depth research, we develop a comprehensive digital strategy tailored to your specific needs and objectives.</p>
                                    <ul class="bx--list--unordered">
                                        <li>Business requirements gathering</li>
                                        <li>User persona development</li>
                                        <li>Competitive analysis</li>
                                        <li>Strategic roadmap creation</li>
                                    </ul>
                                </div>
                                <div class="process-step-content"style="border:2px solid transparent;float:right;margin-right:10%;background-image: url('https://i.pinimg.com/736x/26/7a/13/267a13ec7ee43caa27aa713fd9d9b76a.jpg');">

                                <div class="process-step-number" style="border:2px solid rgba(255, 255, 0, 0.13)">1</div>
                                </div>
                            </div>
                            
                            <div class="process-step">
                                <div class="process-step-content">
                                    <h3 class="process-step-title">Design & Planning</h3>
                                    <p class="process-step-description">Our experienced design team creates user-centered interfaces that balance aesthetic appeal with conversion-focused functionality. We develop detailed project plans with clear milestones and deliverables to ensure transparency throughout the process.</p>
                                    <ul class="bx--list--unordered">
                                        <li>UX/UI design and wireframing</li>
                                        <li>Content strategy</li>
                                        <li>Technical architecture planning</li>
                                        <li>Project timeline development</li>
                                    </ul>
                                </div>
                                <div class="process-step-content"style="border:2px solid transparent;float:right;margin-left:10%;background-image: url('https://i.pinimg.com/736x/26/7a/13/267a13ec7ee43caa27aa713fd9d9b76a.jpg');">

                                    <div class="process-step-number" style="border:2px solid rgba(255, 255, 0, 0.13)">2</div>
                                    </div>                            </div>
                            
                            <div class="process-step">
                                <div class="process-step-content">
                                    <h3 class="process-step-title">Development & Implementation</h3>
                                    <p class="process-step-description">Our development team builds your solution using industry best practices and cutting-edge technologies. We maintain regular communication throughout this phase, providing updates and addressing any questions or concerns that arise.</p>
                                    <ul class="bx--list--unordered">
                                        <li>Agile development methodology</li>
                                        <li>Regular progress updates</li>
                                        <li>Quality assurance testing</li>
                                        <li>Performance optimization</li>
                                    </ul>
                                </div>
                                <div class="process-step-content"style="border:2px solid transparent;float:right;margin-right:10%;background-image: url('https://i.pinimg.com/736x/26/7a/13/267a13ec7ee43caa27aa713fd9d9b76a.jpg');">

                                    <div class="process-step-number" style="border:2px solid rgba(255, 255, 0, 0.13)">3</div>
                                    </div>                            
                                </div>
                            
                            <div class="process-step">
                                <div class="process-step-content">
                                    <h3 class="process-step-title">Launch & Training</h3>
                                    <p class="process-step-description">We ensure a smooth deployment of your solution and provide comprehensive training to your team. Our launch process includes final quality checks, SEO verification, and performance testing to guarantee everything works flawlessly from day one.</p>
                                    <ul class="bx--list--unordered">
                                        <li>Deployment checklist verification</li>
                                        <li>Hands-on system training</li>
                                        <li>Documentation and resources</li>
                                        <li>Launch announcement support</li>
                                    </ul>
                                </div>
                                <div class="process-step-content"style="border:2px solid transparent;float:right;margin-right:10%;background-image: url('https://i.pinimg.com/736x/26/7a/13/267a13ec7ee43caa27aa713fd9d9b76a.jpg');">

                                    <div class="process-step-number" style="border:2px solid rgba(255, 255, 0, 0.13)">4</div>
                                    </div>
                                
                                </div>
                            
                            <div class="process-step">
                                <div class="process-step-content">
                                    <h3 class="process-step-title">Ongoing Support & Optimization</h3>
                                    <p class="process-step-description">Our relationship continues after launch with ongoing support, monitoring, and continuous improvement. We analyze performance data and user feedback to identify opportunities for enhancement and help you adapt to changing market conditions.</p>
                                    <ul class="bx--list--unordered">
                                        <li>Regular performance reviews</li>
                                        <li>Data-driven optimization</li>
                                        <li>Security and feature updates</li>
                                        <li>Strategic growth planning</li>
                                    </ul>
                                </div>
                                <div class="process-step-content"style="border:2px solid transparent;float:right;margin-right:10%;background-image: url('https://i.pinimg.com/736x/26/7a/13/267a13ec7ee43caa27aa713fd9d9b76a.jpg');">

                                    <div class="process-step-number" style="border:2px solid rgba(255, 255, 0, 0.13)">5</div>
                                    </div>                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        

         <!-- Services Section with Enhanced Cards -->
         <section id="services" class="bx--grid">
            <div class="bx--row">
                <div class="bx--col-lg-12">
                    <div class="bx--tile">
                        <h2>
                            <svg class="section-icon" width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
                                <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"></path>
                                <path d="M16,10a6,6,0,1,0,6,6A6,6,0,0,0,16,10Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,16,20Z"></path>
                            </svg>
                            Our Comprehensive Services
                        </h2>
                        <p class="section-description">Discover our full range of digital solutions designed to help your business thrive in the digital landscape. Each service is customizable to meet your specific needs and goals.</p>
                        
                        <div class="services-grid">
                            <div class="service-card">
                                <div class="service-card-icon">
                                    <i class="fas fa-shopping-cart"></i>
                                </div>
                                <div class="service-card-content">
                                    <h3 class="service-card-title">SEO & Content Marketing</h3>
                                    <p class="service-card-description">Data-driven strategies to improve search rankings, increase organic traffic, and establish industry authority.</p>
                                    <button class="bx--btn bx--btn--tertiary service-modal-trigger" data-modal="seo-modal">Learn More</button>
                                </div>
                            </div>
                            
                            <div class="service-card">
                                <div class="service-card-icon">
                                    <i class="fas fa-robot"></i>
                                </div>
                                <div class="service-card-content">
                                    <h3 class="service-card-title">CRM & Business Automation</h3>
                                    <p class="service-card-description">Streamline operations and improve customer relationships with custom CRM solutions and workflow automation.</p>
                                    <button class="bx--btn bx--btn--tertiary service-modal-trigger" data-modal="crm-modal">Learn More</button>
                                </div>
                            </div>
                            
                            <div class="service-card">
                                <div class="service-card-icon">
                                    <i class="fas fa-hashtag"></i>
                                </div>
                                <div class="service-card-content">
                                    <h3 class="service-card-title">Social Media Marketing</h3>
                                    <p class="service-card-description">Strategic social media campaigns to build brand awareness, engage your audience, and drive conversions.</p>
                                    <button class="bx--btn bx--btn--tertiary service-modal-trigger" data-modal="social-modal">Learn More</button>
                                </div>
                            </div>
                            
                            <div class="service-card">
                                <div class="service-card-icon">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="service-card-content">
                                    <h3 class="service-card-title">Email Marketing</h3>
                                    <p class="service-card-description">Personalized email campaigns that nurture leads, re-engage customers, and drive repeat business.</p>
                                    <button class="bx--btn bx--btn--tertiary service-modal-trigger" data-modal="email-modal">Learn More</button>
                                </div>
                                    <!-- <p class="service-card-description">Custom online stores with seamless checkout experiences, secure payment integration, and inventory management.</p>
                                    <button class="bx--btn bx--btn--tertiary service-modal-trigger" data-modal="ecommerce-modal">Learn More</button>
                                </div> -->
                            </div>
                            
                            <div class="service-card">
                                <div class="service-card-icon">
                                    <i class="fas fa-laptop-code"></i>
                                </div>
                                <div class="service-card-content">
                                    <h3 class="service-card-title">Website Design & Development</h3>
                                    <p class="service-card-description">Responsive, performance-optimized websites that provide exceptional user experiences across all devices.</p>
                                    <button class="bx--btn bx--btn--tertiary service-modal-trigger" data-modal="website-modal">Learn More</button>
                                </div>
                            </div>
                            
                            <div class="service-card">
                                <div class="service-card-icon">
                                    <i class="fas fa-search"></i>
                                </div>
                                <div class="service-card-content">
                                    <h3 class="service-card-title">SEO & Content Marketing</h3>
                                    <p class="service-card-description">Data-driven strategies to improve search rankings, increase organic traffic, and establish industry authority.</p>
                                    <button class="bx--btn bx--btn--tertiary service-modal-trigger" data-modal="seo-modal">Learn More</button>
                                </div>
                            </div>
                            
                            <!-- <div class="service-card"> -->
                                <!-- <div class="service-card-icon">
                                    <i class="fas fa-users"></i>
                                </div> -->
                                <!-- <div class="service-card-content">
                                    <h3 class="service-card- -->
                            <!-- </div> -->
                        </div>
                    </div>
                </div>
        </section>
        <!-- Company Profile Section -->
        <section id="about" class="bx--grid">
            <div class="bx--row">
                <div class="bx--col-lg-12">
                    <div class="bx--tile animate__animated animate__fadeIn">
                        <h2>
                            <svg class="section-icon" width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
                                <path d="M16,4c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S22.6,4,16,4z M16,26c-5.5,0-10-4.5-10-10S10.5,6,16,6 s10,4.5,10,10S21.5,26,16,26z"></path>
                                <path d="M16,10c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S19.3,10,16,10z M16,20c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4 S18.2,20,16,20z"></path>
                            </svg>
                            Company Profile
                        </h2>
                        <p class="section-description">Founded in 2020, Skunkworks Digital has rapidly established itself as a premier digital solutions provider. We specialize in creating comprehensive online services that help businesses of all sizes establish, expand, and optimize their digital presence in an increasingly competitive marketplace.</p>
                        
                        <p>At Skunkworks Digital, we believe that every business deserves access to cutting-edge digital tools and strategies regardless of their size or industry. Our team of experts combines deep technical knowledge with business acumen to deliver solutions that not only look great but drive measurable results.</p>
                        
                        <p>What sets us apart is our commitment to understanding your unique business challenges and goals. We don't offer one-size-fits-all solutions – instead, we take the time to learn about your business, your customers, and your market before crafting a tailored digital strategy that positions you for success.</p>
                        
                        <div class="accordion">
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <div class="accordion-title">Our Core Services</div>
                                    <div class="accordion-icon"><i class="fas fa-chevron-down"></i></div>
                                </div>
                                <div class="accordion-content">
                                    <div class="service-item">
                                        <div class="icon">
                                            <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                                                <path d="M28,10H22V4h6V10z M22,12h6v6h-6V12z M22,26v-6h6v6H22z M12,4h8v8h-8V4z M20,14v8h-8v-8H20z M10,28V14H4v14H10z M4,12V4h6v8H4z M12,14h8v14h-8V14z"></path>
                                            </svg>
                                        </div>
                                        <div class="content">
                                            <div class="title">E-commerce Growth & Payment Integration</div>
                                            <div class="description">Comprehensive e-commerce solutions including platform setup, product catalog management, and secure payment gateway integration across multiple currencies and payment methods. We help businesses expand their online sales channels and create seamless shopping experiences that convert browsers into buyers and first-time customers into loyal advocates.</div>
                                        </div>
                                    </div>
                                    
                                    <div class="service-item">
                                        <div class="icon">
                                            <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                                                <path d="M30,16l-4,4h-4v4h-4l-4,4H6V16h4l4-4h8v4H30z M23.15,14H17V7.85L14.15,5H2v18h6v2H0V3h15l5,5V14z M19,3h8v5h-8V3z"></path>
                                            </svg>
                                        </div>
                                        <div class="content">
                                            <div class="title">Web Development & Hosting</div>
                                            <div class="description">Custom website design and development with responsive layouts, performance optimization, and reliable hosting solutions with 99.9% uptime guarantee and 24/7 monitoring. Our development practices focus on creating fast-loading, secure, and search-engine-friendly sites that look amazing on all devices and provide intuitive user experiences.</div>
                                        </div>
                                    </div>
                                    
                                    <div class="service-item">
                                        <div class="icon">
                                            <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                                                <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"></path>
                                                <circle cx="16" cy="23.5" r="1.5"></circle>
                                                <path d="M17,8H15v12h2Z"></path>
                                            </svg>
                                        </div>
                                        <div class="content">
                                            <div class="title">SEO, Social Media & Email Marketing</div>
                                            <div class="description">Data-driven marketing strategies including search engine optimization, targeted social media campaigns, and personalized email marketing to increase traffic, engagement, and conversion rates. We develop comprehensive content strategies that establish your brand as an industry authority while driving qualified leads to your business.</div>
                                        </div>
                                    </div>
                                    
                                    <div class="service-item">
                                        <div class="icon">
                                            <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                                                <path d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM4,8H28v4H4ZM4,24V14H28V24Z"></path>
                                                <rect x="6" y="16" width="10" height="2"></rect>
                                                <rect x="6" y="20" width="6" height="2"></rect>
                                            </svg>
                                        </div>
                                        <div class="content">
                                            <div class="title">CRM Setup & Business Process Automation</div>
                                            <div class="description">Implementation and customization of customer relationship management systems and workflow automation to streamline operations, reduce manual tasks, and improve customer experiences. Our automation solutions help businesses reclaim valuable time, reduce operational costs, and create more consistent customer touchpoints across all channels.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="stat-highlight">
                            <div class="stat-number">250+</div>
                            <div class="stat-description">Successful client projects delivered across 12 industries since our founding, with a client retention rate of 92%.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Case Studies Section -->
         <section id="case-studies" class="bx--grid case-studies-section">
            <div class="bx--row">
                <div class="bx--col-lg-12">
                    <div class="bx--tile">
                        <h2>
                            <svg class="section-icon" width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
                                <path d="M26,2H6C4.9,2,4,2.9,4,4v24c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V4C28,2.9,27.1,2,26,2z M26,28H6V4h20V28z"></path>
                                <path d="M12,8H10v2h2V8z"></path>
                                <path d="M12,12H10v2h2V12z"></path>
                                <path d="M12,16H10v2h2V16z"></path>
                                <path d="M12,20H10v2h2V20z"></path>
                                <path d="M22,8H14V6h8V8z"></path>
                                <path d="M22,12h-8v-2h8V12z"></path>
                                <path d="M22,16h-8v-2h8V16z"></path>
                                <path d="M22,20h-8v-2h8V20z"></path>
                            </svg>
                            Client Success Stories
                        </h2>
                        <p class="section-description">Discover how we've helped businesses across various industries achieve remarkable results through strategic digital solutions.</p>
                        
                        <div class="bx--row case-studies-grid">
                            <div class="bx--col-md-4">
                                <div class="case-study-card">
                                    <div class="case-study-image" style="background-color: #0f62fe;"></div>
                                    <div class="case-study-content">
                                        <h3 class="case-study-title">E-commerce Transformation for Fashion Retailer</h3>
                                        <p class="case-study-description">We helped a struggling fashion retailer transition from a brick-and-mortar focus to a thriving online business model, resulting in significant revenue growth and expanded market reach.</p>
                                        <div class="case-study-results">
                                            <div class="case-study-result">
                                                <div class="result-number">312%</div>
                                                <div class="result-label">Revenue Growth</div>
                                            </div>
                                            <div class="case-study-result">
                                                <div class="result-number">4.2x</div>
                                                <div class="result-label">Conversion Rate</div>
                                            </div>
                                        </div>
                                        <button class="bx--btn bx--btn--tertiary case-study-modal-trigger" data-modal="case-study-1">Read Full Case Study</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bx--col-md-4">
                                <div class="case-study-card">
                                    <div class="case-study-image" style="background-color: #42be65;"></div>
                                    <div class="case-study-content">
                                        <h3 class="case-study-title">CRM Implementation for Professional Services Firm</h3>
                                        <p class="case-study-description">We designed and implemented a custom CRM solution for a growing accounting firm, streamlining their client management and enabling better service delivery.</p>
                                        <div class="case-study-results">
                                            <div class="case-study-result">
                                                <div class="result-number">40%</div>
                                                <div class="result-label">Time Saved</div>
                                            </div>
                                            <div class="case-study-result">
                                                <div class="result-number">28%</div>
                                                <div class="result-label">Revenue Increase</div>
                                            </div>
                                        </div>
                                        <button class="bx--btn bx--btn--tertiary case-study-modal-trigger" data-modal="case-study-2">Read Full Case Study</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bx--col-md-4">
                                <div class="case-study-card">
                                    <div class="case-study-image" style="background-color: #8a3ffc;"></div>
                                    <div class="case-study-content">
                                        <h3 class="case-study-title">SEO & Content Marketing for SaaS Startup</h3>
                                        <p class="case-study-description">We developed a comprehensive SEO and content strategy for a SaaS startup, helping them establish thought leadership and generate a steady stream of qualified leads.</p>
                                        <div class="case-study-results">
                                            <div class="case-study-result">
                                                <div class="result-number">186%</div>
                                                <div class="result-label">Organic Traffic</div>
                                            </div>
                                            <div class="case-study-result">
                                                <div class="result-number">43%</div>
                                                <div class="result-label">Lead Generation</div>
                                            </div>
                                        </div>
                                        <button class="bx--btn bx--btn--tertiary case-study-modal-trigger" data-modal="case-study-3">Read Full Case Study</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Testimonials Section -->
        <section id="testimonials" class="bx--grid testimonials-section">
            <div class="bx--row">
                <div class="bx--col-lg-12">
                    <div class="bx--tile">
                        <h2>
                            <svg class="section-icon" width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
                                <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"></path>
                                <path d="M16,10a6,6,0,1,0,6,6A6,6,0,0,0,16,10Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,16,20Z"></path>
                            </svg>
                            What Our Clients Say
                        </h2>
                        <p class="section-description">Don't just take our word for it. Here's what some of our clients have to say about working with Skunkworks Digital:</p>
                        
                        <div class="testimonial-grid">
                            <div class="testimonial-card">
                                <div class="testimonial-content">
                                    <p>"Skunkworks Digital completely transformed our online presence. Their team took the time to understand our business and created a solution that not only looks great but has significantly increased our conversion rates. They continue to be a valuable partner in our digital journey."</p>
                                </div>
                                <div class="testimonial-author">
                                    <div class="testimonial-avatar">JD</div>
                                    <div class="testimonial-info">
                                        <div class="testimonial-name">James Donovan</div>
                                        <div class="testimonial-position">CEO, Latitude Fashion</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="testimonial-card">
                                <div class="testimonial-content">
                                    <p>"Working with Skunkworks Digital has been a game-changer for our business. Their CRM implementation streamlined our operations and gave us valuable insights into our customer base. The team is responsive, knowledgeable, and genuinely cares about our success."</p>
                                </div>
                                <div class="testimonial-author">
                                    <div class="testimonial-avatar">MM</div>
                                    <div class="testimonial-info">
                                        <div class="testimonial-name">Maria Martinez</div>
                                        <div class="testimonial-position">Managing Partner, Rodriguez & Associates</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="testimonial-card">
                                <div class="testimonial-content">
                                    <p>"The SEO and content marketing strategy developed by Skunkworks Digital exceeded our expectations. Within six months, we saw a significant increase in organic traffic and lead generation. Their data-driven approach and clear reporting make it easy to see the ROI on our investment."</p>
                                </div>
                                <div class="testimonial-author">
                                    <div class="testimonial-avatar">AK</div>
                                    <div class="testimonial-info">
                                        <div class="testimonial-name">Alex Kim</div>
                                        <div class="testimonial-position">Founder, NexTech Solutions</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="testimonial-card">
                                <div class="testimonial-content">
                                    <p>"I appreciate the transparency and professionalism of the Skunkworks Digital team. They set realistic expectations from the start and then consistently delivered on their promises. Our e-commerce site now runs smoothly, and our sales have increased significantly since the launch."</p>
                                </div>
                                <div class="testimonial-author">
                                    <div class="testimonial-avatar">SR</div>
                                    <div class="testimonial-info">
                                        <div class="testimonial-name">Sarah Reynolds</div>
                                        <div class="testimonial-position">Operations Director, GreenLife Organics</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Team Section -->
        <section id="team" class="bx--grid team-section">
            <div class="bx--row">
                <div class="bx--col-lg-12">
                    <div class="bx--tile">
                        <h2>
                            <svg class="section-icon" width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
                                <path d="M16,4c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S22.6,4,16,4z M16,26c-5.5,0-10-4.5-10-10S10.5,6,16,6 s10,4.5,10,10S21.5,26,16,26z"></path>
                                <path d="M16,10c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S19.3,10,16,10z M16,20c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4 S18.2,20,16,20z"></path>
                            </svg>
                            Meet Our Team
                        </h2>
                        <p class="section-description">Our diverse team of digital experts brings together a wealth of experience and specialized knowledge to deliver exceptional results for our clients.</p>
                        
                        <div class="team-grid">
                            <div class="team-card">
                                <div class="team-avatar">
                                    <img src="/api/placeholder/250/250" alt="Team Member" />
                                </div>
                                <div class="team-info">
                                    <h3 class="team-name">Jennifer Chen</h3>
                                    <div class="team-position">Founder & CEO</div>
                                    <p class="team-bio">With over 15 years of experience in digital transformation, Jennifer leads Skunkworks Digital with a passion for helping businesses succeed in the digital landscape.</p>
                                    <div class="team-social">
                                        <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
                                        <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                                        <a href="#" class="social-link"><i class="fas fa-envelope"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="team-card">
                                <div class="team-avatar">
                                    <img src="/api/placeholder/250/250" alt="Team Member" />
                                </div>
                                <div class="team-info">
                                    <h3 class="team-name">Michael Rodriguez</h3>
                                    <div class="team-position">CTO & Lead Developer</div>
                                    <p class="team-bio">Michael oversees all technical aspects of our projects, ensuring they're built with scalability, security, and performance in mind.</p>
                                    <div class="team-social">
                                        <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
                                        <a href="#" class="social-link"><i class="fab fa-github"></i></a>
                                        <a href="#" class="social-link"><i class="fas fa-envelope"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="team-card">
                                <div class="team-avatar">
                                    <img src="/api/placeholder/250/250" alt="Team Member" />
                                </div>
                                <div class="team-info">
                                    <h3 class="team-name">Sophia Williams</h3>
                                    <div class="team-position">Creative Director</div>
                                    <p class="team-bio">Sophia leads our design team, creating stunning visuals and user experiences that balance aesthetic appeal with conversion-focused functionality.</p>
                                    <div class="team-social">
                                        <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
                                        <a href="#" class="social-link"><i class="fab fa-dribbble"></i></a>
                                        <a href="#" class="social-link"><i class="fas fa-envelope"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="team-card">
                                <div class="team-avatar">
                                    <img src="/api/placeholder/250/250" alt="Team Member" />
                                </div>
                                <div class="team-info">
                                    <h3 class="team-name">David Thompson</h3>
                                    <div class="team-position">Marketing Strategist</div>
                                    <p class="team-bio">David specializes in developing data-driven marketing strategies that deliver measurable results across SEO, content marketing, and social media campaigns.</p>
                                    <div class="team-social">
                                        <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
                                        <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                                        <a href="#" class="social-link"><i class="fas fa-envelope"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Value Proposition Section -->
        <section id="value-proposition" class="bx--grid">
            <div class="bx--row">
                <div class="bx--col-lg-12">
                    <div class="bx--tile animate__animated animate__fadeIn">
                        <h2>
                            <svg class="section-icon" width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
                                <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"></path>
                                <path d="M20.59,22,15,16.41V7h2v8.58l5,5.01L20.59,22z"></path>
                            </svg>
                            Our Value Proposition
                        </h2>
                        <p class="section-description">We provide end-to-end digital enablement, integrating AI-driven strategies and data analytics to enhance customer engagement and revenue growth. Our approach is built on three core principles that drive measurable business outcomes:</p>
                        
                        <div class="service-item">
                            <div class="icon">
                                <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                                    <path d="M25,14H17V6h8ZM15,4V16H27V4Z"></path>
                                    <path d="M15,28H3V16H15ZM29,16V28H17V16Z"></path>
                                </svg>
                            </div>
                            <div class="content">
                                <div class="title">Tech-agnostic solutions</div>
                                <div class="description">We work with all major platforms including Shopify, Wix, WordPress, and custom solutions, selecting the technology that best matches your business needs rather than forcing a one-size-fits-all approach. This ensures you get a solution that fits your specific requirements, budget, and future growth plans without being locked into a platform that may limit your potential.</div>
                            </div>
                        </div>
                        
                        <div class="service-item">
                            <div class="icon">
                                <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                                    <path d="M29.707,19.293l-3-3a1,1,0,0,0-1.414,0L16,25.5859,10.707,20.293a1,1,0,0,0-1.414,0l-3,3a1,1,0,0,0,0,1.414l9,9a1,1,0,0,0,1.414,0l13-13A1,1,0,0,0,29.707,19.293Z"></path>
                                    <path d="M30,15a1,1,0,0,1-.29.71L17,28.41l-6.29-6.3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,0,1.42l10,10a1,1,0,0,0,1.42,0l15-15a1,1,0,0,0,0-1.42l-4-4a1,1,0,0,0-1.42,0L17,26.59l-2.29-2.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l12-12a1,1,0,0,0,0-1.42Z"></path>
                                </svg>
                            </div>
                            <div class="content">
                                <div class="title">Optimized for conversion & engagement</div>
                                <div class="description">Every solution we design is built with conversion optimization at its core. We implement data-driven UX strategies, A/B testing, and customer journey mapping to maximize engagement and conversions. Our designs don't just look good – they're strategically crafted to guide visitors toward specific actions that support your business goals, whether that's making a purchase, signing up for a newsletter, or requesting more information.</div>
                            </div>
                        </div>
                        
                        <div class="service-item">
                            <div class="icon">
                                <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                                    <path d="M17.7,30l-1.4-2.9L13.5,26l0.3-3.2L11,19.5l2-2.5l-1.2-3l2.5-2l-0.2-3.2l2.8-1.3L18.3,4l3,0l1.4,2.9l2.8,1.2L25.2,11l2.8,3.2l-2,2.5l1.2,3l-2.5,2l0.2,3.2l-2.8,1.3L20.7,30L17.7,30z M19.5,22.3l3.8-3.8l-1.6-1.6l-2.2,2.2l-1-1l2.2-2.2l-1.6-1.6l-3.8,3.8L19.5,22.3z"></path>
                                    <path d="M11.9,20.5l-5.7,5.7l-2.9-2.9l5.7-5.7L7.4,16l8.2-2.7L12.9,21L11.9,20.5z"></path>
                                </svg>
                            </div>
                            <div class="content">
                                <div class="title">ROI-focused marketing campaigns</div>
                                <div class="description">Our marketing strategies are built around measurable outcomes with clear KPIs. We track and optimize for the metrics that matter most to your business growth, ensuring every marketing dollar delivers maximum return. Instead of focusing solely on vanity metrics like impressions or likes, we prioritize metrics that directly impact your bottom line, such as qualified leads, conversion rates, customer acquisition costs, and lifetime customer value.</div>
                            </div>
                        </div>
                        
                        <div class="stat-highlight">
                            <div class="stat-number">37%</div>
                            <div class="stat-description">Average increase in conversion rates achieved for our clients within the first six months of implementing our optimized digital solutions.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- FAQ Section -->
        <section id="faq" class="bx--grid faq-section">
            <div class="bx--row">
                <div class="bx--col-lg-12">
                    <div class="bx--tile">
                        <h2>
                            <svg class="section-icon" width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
                                <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"></path>
                                <circle cx="16" cy="23.5" r="1.5"></circle>
                                <path d="M17,8H15v12h2Z"></path>
                            </svg>
                            Frequently Asked Questions
                        </h2>
                        <p class="section-description">Have questions about working with Skunkworks Digital? Find answers to common inquiries below.</p>
                        
                        <div class="accordion">
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <div class="accordion-title">What types of businesses do you work with?</div>
                                    <div class="accordion-icon"><i class="fas fa-chevron-down"></i></div>
                                </div>
                                <div class="accordion-content">
                                    <p>We work with businesses of all sizes across various industries, from startups and small businesses to established enterprises. Our primary focus is on SMEs & startups, e-commerce businesses, and enterprises needing CRM & automation solutions. We bring the same level of dedication and expertise to every project, regardless of its size or complexity.</p>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <div class="accordion-title">How long does a typical project take to complete?</div>
                                    <div class="accordion-icon"><i class="fas fa-chevron-down"></i></div>
                                </div>
                                <div class="accordion-content">
                                    <p>Project timelines vary depending on scope, complexity, and specific requirements. A basic website might take 4-6 weeks, while a comprehensive e-commerce platform or CRM implementation could take 2-4 months. During our initial consultation, we'll provide a detailed timeline based on your specific needs and work with you to establish realistic milestones and deadlines.</p>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <div class="accordion-title">What is your pricing structure?</div>
                                    <div class="accordion-icon"><i class="fas fa-chevron-down"></i></div>
                                </div>
                                <div class="accordion-content">
                                    <p>We offer flexible pricing options including project-based quotes, monthly retainers, and growth-based partnerships. Our pricing is transparent, with no hidden fees or surprise costs. We'll work with you to find a pricing structure that suits your budget and business needs. During our initial consultation, we'll discuss your requirements in detail and provide a customized quote based on the scope of work.</p>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <div class="accordion-title">Do you provide ongoing support after project completion?</div>
                                    <div class="accordion-icon"><i class="fas fa-chevron-down"></i></div>
                                </div>
                                <div class="accordion-content">
                                    <p>Yes, we offer various support and maintenance packages to ensure your digital assets continue to perform optimally. These include technical support, content updates, security monitoring, performance optimization, and strategic guidance. We believe in building long-term relationships with our clients and providing continuous value beyond the initial project implementation.</p>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <div class="accordion-title">What platforms and technologies do you work with?</div>
                                    <div class="accordion-icon"><i class="fas fa-chevron-down"></i></div>
                                </div>
                                <div class="accordion-content">
                                    <p>We are platform-agnostic and work with a wide range of technologies based on what best suits your specific needs. For e-commerce, we work with platforms like Shopify, WooCommerce, and Magento. For websites, we use WordPress, Webflow, and custom solutions. For CRM and automation, we implement HubSpot, Salesforce, and custom-built systems. Our focus is on selecting the right technology for your business rather than forcing a one-size-fits-all approach.</p>
                                </div>
                            </div>
                            
                            <div class="accordion-item">
                                <div class="accordion-header">
                                    <div class="accordion-title">How do you measure and report on results?</div>
                                    <div class="accordion-icon"><i class="fas fa-chevron-down"></i></div>
                                </div>
                                <div class="accordion-content">
                                    <p>We establish clear KPIs at the beginning of each project and track progress through comprehensive analytics and reporting. Depending on the nature of your project, we monitor metrics such as website traffic, conversion rates, engagement, sales, lead generation, and ROI. We provide regular reports that highlight key performance indicators, insights, and recommendations for continuous improvement. Our goal is to ensure complete transparency and demonstrate the tangible value of our work.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Next Steps/Contact Section -->
        <section id="contact" class="bx--grid">
            <div class="bx--row">
                <div class="bx--col-lg-12">
                    <div class="bx--tile">
                        <h2>
                            <svg class="section-icon" width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
                                <path d="M26,2H6C4.9,2,4,2.9,4,4v24c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V4C28,2.9,27.1,2,26,2z M26,28H6V4h20V28z"></path>
                                <path d="M12,8H10v2h2V8z"></path>
                                <path d="M12,12H10v2h2V12z"></path>
                                <path d="M12,16H10v2h2V16z"></path>
                                <path d="M12,20H10v2h2V20z"></path>
                                <path d="M22,8H14V6h8V8z"></path>
                                <path d="M22,12h-8v-2h8V12z"></path>
                                <path d="M22,16h-8v-2h8V16z"></path>
                                <path d="M22,20h-8v-2h8V20z"></path>
                            </svg>
                            Let's Transform Your Digital Presence
                        </h2>
                        <p class="section-description">Ready to take your business to the next level? Contact us today to discuss your project and discover how Skunkworks Digital can help you achieve your digital goals.</p>
                        
                        <div class="bx--row">
                            <div class="bx--col-md-6" style="float:left; max-width:40%;">
                                <h3>Contact Information</h3>
                                <div class="service-item">
                                    <div class="icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div class="content">
                                        <div class="title">Office Location</div>
                                        <div class="description">123 Innovation Drive, Suite 500<br>San Francisco, CA 94103</div>
                                    </div>
                                </div>
                                
                                <div class="service-item">
                                    <div class="icon">
                                        <i class="fas fa-phone-alt"></i>
                                    </div>
                                    <div class="content">
                                        <div class="title">Phone</div>
                                        <div class="description">(415) 555-0123</div>
                                    </div>
                                </div>
                                
                                <div class="service-item">
                                    <div class="icon">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div class="content">
                                        <div class="title">Email</div>
                                        <div class="description">hello@skunkworksdigital.com</div>
                                    </div>
                                </div>
                                
                                <div class="service-item">
                                    <div class="icon">
                                        <i class="fas fa-clock"></i>
                                    </div>
                                    <div class="content">
                                        <div class="title">Business Hours</div>
                                        <div class="description">Monday-Friday: 9:00 AM - 6:00 PM PST<br>Saturday-Sunday: Closed</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bx--col-md-6" style="float:left;max-width:50%;min-width:300px;">
                                <h3>Get in Touch</h3>
                                <form action="send.php" method="post">
                                    <div class="form-group">
                                        <label for="name" class="form-label">Name</label>
                                        <input type="text" id="name" name="name" class="form-control" required>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" id="email" name="email" class="form-control" required>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="phone" class="form-label">Phone (Optional)</label>
                                        <input type="tel" id="phone" name="phone" class="form-control">
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="company" class="form-label">Company</label>
                                        <input type="text" id="company" name="company" class="form-control" required>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="service" class="form-label">Service of Interest</label>
                                        <select id="service" name="service" class="form-control">
                                            <option value="">Please select...</option>
                                            <option value="e-commerce">E-commerce Development</option>
                                            <option value="web-development">Website Design & Development</option>
                                            <option value="seo">SEO & Content Marketing</option>
                                            <option value="crm">CRM & Business Automation</option>
                                            <option value="social-media">Social Media Marketing</option>
                                            <option value="email">Email Marketing</option>
                                            <option value="other">Other/Not Sure</option>
                                        </select>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="message" class="form-label">Message</label>
                                        <textarea id="message" name="message" class="form-control" required></textarea>
                                    </div>
                                    
                                    <button type="submit" class="bx--btn bx--btn--primary">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

                            <!-- Footer -->
    <footer class="bx--footer">
        <div class="footer-grid">
            <div class="footer-column">
                <h3 class="footer-title">Skunkworks Digital</h3>
                <p>Empowering businesses to scale digitally through comprehensive solutions and strategies since 2020.</p>
                <div class="footer-social">
                    <a href="#" class="footer-social-link"><i class="fab fa-linkedin"></i></a>
                    <a href="#" class="footer-social-link"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="footer-social-link"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="footer-social-link"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            
            <div class="footer-column">
                <h3 class="footer-title">Services</h3>
                <div class="footer-links">
                    <a href="#services" class="footer-link">E-commerce Development</a>
                    <a href="#services" class="footer-link">Website Design & Development</a>
                    <a href="#services" class="footer-link">SEO & Content Marketing</a>
                    <a href="#services" class="footer-link">CRM & Business Automation</a>
                    <a href="#services" class="footer-link">Social Media Marketing</a>
                    <a href="#services" class="footer-link">Email Marketing</a>
                </div>
            </div>
            
            <div class="footer-column">
                <h3 class="footer-title">Company</h3>
                <div class="footer-links">
                    <a href="#about" class="footer-link">About Us</a>
                    <a href="#team" class="footer-link">Our Team</a>
                    <a href="#case-studies" class="footer-link">Case Studies</a>
                    <a href="#testimonials" class="footer-link">Testimonials</a>
                    <a href="#faq" class="footer-link">FAQ</a>
                    <a href="#" class="footer-link">Careers</a>
                </div>
            </div>
            
            <div class="footer-column">
                <h3 class="footer-title">Resources</h3>
                <div class="footer-links">
                    <a href="#" class="footer-link">Blog</a>
                    <a href="#" class="footer-link">E-books & Guides</a>
                    <a href="#" class="footer-link">Webinars</a>
                    <a href="#" class="footer-link">Industry Reports</a>
                    <a href="#" class="footer-link">Partners</a>
                    <a href="#" class="footer-link">Support</a>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div>© 2025 Skunkworks Digital. All Rights Reserved.</div>
            <div>
                <a href="#" class="footer-link" style="margin-right: 1.5rem;">Privacy Policy</a>
                <a href="#" class="footer-link">Terms of Service</a>
            </div>
        </div>
    </footer>