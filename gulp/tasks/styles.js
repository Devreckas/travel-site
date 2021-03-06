var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssVars = require('postcss-simple-vars'),
cssNested = require('postcss-nested'),
cssImport = require('postcss-import'),
cssMixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, cssMixins, cssVars, cssNested, hexrgba, autoprefixer]))
		.on('error', function(errorStuff){
			console.log(errorStuff.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));
});